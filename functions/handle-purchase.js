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

    console.log({
      stripeEvent,
      data: stripeEvent.data,
      obj: stripeEvent.data.object,
    });

    if (stripeEvent.type === "charge.succeeded") {
      const msg = {
        to: emailTo,
        from: process.env.FROM_EMAIL_ADDRESS,
        subject: `New purchase from ConfrontJS`,
        html: ``,
      };
      // await sgMail.send(msg);
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
