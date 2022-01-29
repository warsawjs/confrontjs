const { format } = require("date-fns");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async ({ body, headers }) => {
  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    const { customer_email, customer_name, created } = stripeEvent.data.object;

    console.log({
      data: stripeEvent.data,
      date: new Date(created),
    });

    if (customer_email === "jaseveen@gmail.com") {
      const msg = {
        to: customer_email,
        from: process.env.FROM_EMAIL_ADDRESS,
        subject: `New purchase from ConfrontJS`,
        html: `<h1>hula! ${customer_name}</h1>`,
      };
      await sgMail.send(msg);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};
