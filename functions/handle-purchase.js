const { format } = require("date-fns");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async ({ body, headers }) => {
  try {
    console.log(
      { body },
      { headers: headers["stripe-signature"] },
      { stripe_webhook: process.env.STRIPE_WEBHOOK_SECRET },
      { stripe }
    );
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (stripeEvent.type === "charge.succeeded") {
      const emailTo = stripeEvent.data.object.billing_details.email;
      const customerName = stripeEvent.data.object.billing_details.name;
      const product = stripeEvent.data.object.description;
      const id = stripeEvent.data.object.id;
      const totalAmount = stripeEvent.data.object.amount / 100;
      const dateString = format(new Date(), "dd-MM-yyyy");
      let piecesArray = product.split(/(\dx)/).filter(Boolean);
      let quantities = piecesArray
        .filter((item) => item.includes("x"))
        .reverse();
      const products = piecesArray
        .filter((item) => !item.includes("x"))
        .reverse();

      const msg = {
        to: emailTo,
        from: process.env.FROM_EMAIL_ADDRESS,
        subject: `New purchase from ConfrontJS`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
              <!--[if !mso]><!-->
              <meta http-equiv="X-UA-Compatible" content="IE=Edge">
              <!--<![endif]-->
              <!--[if (gte mso 9)|(IE)]>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:AllowPNG/>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
              <!--[if (gte mso 9)|(IE)]>
          <style type="text/css">
            body {width: 600px;margin: 0 auto;}
            table {border-collapse: collapse;}
            table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
            img {-ms-interpolation-mode: bicubic;}
          </style>
        <![endif]-->
              <style type="text/css">
            body, p, div {
              font-family: inherit;
              font-size: 14px;
            }
            body {
              color: #000000;
              background-color: #17e9e0;
            }
            body a {
              color: #1188E6;
              text-decoration: none;
            }
            p { margin: 0; padding: 0; }
            table.wrapper {
              width:100% !important;
              table-layout: fixed;
              -webkit-font-smoothing: antialiased;
              -webkit-text-size-adjust: 100%;
              -moz-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            img.max-width {
              max-width: 100% !important;
            }
            .column.of-2 {
              width: 50%;
            }
            .column.of-3 {
              width: 33.333%;
            }
            .column.of-4 {
              width: 25%;
            }
            ul ul ul ul  {
              list-style-type: disc !important;
            }
            ol ol {
              list-style-type: lower-roman !important;
            }
            ol ol ol {
              list-style-type: lower-latin !important;
            }
            ol ol ol ol {
              list-style-type: decimal !important;
            }
            @media screen and (max-width:480px) {
              .preheader .rightColumnContent,
              .footer .rightColumnContent {
                text-align: left !important;
              }
              .preheader .rightColumnContent div,
              .preheader .rightColumnContent span,
              .footer .rightColumnContent div,
              .footer .rightColumnContent span {
                text-align: left !important;
              }
              .preheader .rightColumnContent,
              .preheader .leftColumnContent {
                font-size: 80% !important;
                padding: 5px 0;
              }
              table.wrapper-mobile {
                width: 100% !important;
                table-layout: fixed;
              }
              img.max-width {
                height: auto !important;
                max-width: 100% !important;
              }
              a.bulletproof-button {
                display: block !important;
                width: auto !important;
                font-size: 80%;
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .columns {
                width: 100% !important;
              }
              .column {
                display: block !important;
                width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
              .social-icon-column {
                display: inline-block !important;
              }
            }
          </style>
              <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"><style>
        body {font-family: 'Montserrat', sans-serif;}
        </style><!--End Head user entered-->
            </head>
            <body>
              <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:16px; font-family:inherit; color:#000000; background-color: #5e99d3;">
                <div class="webkit">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#5e99d3">
                    <tr>
                      <td valign="top" bgcolor="#a64ac9" width="100%">
                        <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td width="100%">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td>
                                    <!--[if mso]>
            <center>
            <table><tr><td width="600">
          <![endif]-->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                              <tr>
                                                <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
            <tr>
              <td role="module-content">
                <p></p>
              </td>
            </tr>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ecb815cc-87bc-4a3f-a334-040d110516dc" data-mc-module-version="2019-10-22">
          </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 0px 30px 0px;" bgcolor="#5e99d3" data-distribution="1">
            <tbody>
              <tr role="module-content">
                <td height="100%" valign="top"><table width="600" style="width:600px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
              <tbody>
                <tr>
                  <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c7fa172a-cdbf-4e85-ac82-60844b32dd62">
            <tbody>
              <tr>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                  <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="122" alt="" data-proportionally-constrained="true" data-responsive="false" src="https://2021confrontjs.s3.eu-central-1.amazonaws.com/ConfrontJS_logo_512_szara.png" height="90">
                </td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="594ac2bc-2bb0-4642-8002-a8c9b543d125" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:10px 0px 0px 0px; line-height:16px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #000; font-size: 20px">ConfrontJS 2021</span></div>
        <div style="font-family: inherit; text-align: center"><span style="color: #000; font-size: 16px">11 December 2021 in Warsaw, Poland</span></div>
        <div></div></div></td>
              </tr>
            </tbody>
          </table></td>
                </tr>
              </tbody>
            </table></td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8fd711e6-aecf-4663-bf53-6607f08b57e9" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:30px 0px 40px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #000; font-size: 24px"><strong>THANK YOU FOR YOUR PURCHASE!</strong></span></div>
        <div style="font-family: inherit; text-align: center"><br></div>
        <div style="font-family: inherit; text-align: center"><span style="color: #000; font-size: 12px"><strong>Sales Receipt</strong></span></div>
        <div style="font-family: inherit; text-align: center"><span style="color: #000; font-size: 12px">${dateString}</span></div><div></div></div></td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8fd711e6-aecf-4663-bf53-6607f08b57e9.1" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:0px 40px 40px 40px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div>
        <div style="font-family: inherit; text-align: inherit"><span style="color: #000; font-size: 12px"><strong>Issued For: </strong></span><span style="color: #000; font-size: 12px">${customerName}</span></div>
        <div style="font-family: inherit; text-align: inherit"><span style="color: #000; font-size: 12px"><strong>Email: </strong></span><span style="color: #000; font-size: 12px">${emailTo}</span></div>
        <div style="font-family: inherit; text-align: inherit"><span style="color: #000; font-size: 12px"><strong>Ticket ID: </strong></span><span style="color: #000; font-size: 12px">${id}</span></div><div style="font-family: inherit; text-align: inherit"><span style="color: #000; font-size: 12px"><strong>Total Price: </strong></span><span style="color: #000; font-size: 12px">${totalAmount} pln</span></div>
        <div style="font-family: inherit; text-align: inherit; height:20px;"><span style="color: #000; font-size: 12px"></div>
        <div style="font-family: inherit; text-align: center; line-height: 30px">
        <ul style="list-style: none;">
        ${quantities
          .map(
            (q, i) =>
              `<li style="color: #000; font-size: 20px; font-weight: bold">${q} - ${products[i]}</li>`
          )
          .join("")}
        </ul>
        </div>
        <div></div></div></td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8fd711e6-aecf-4663-bf53-6607f08b57e9.2" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:10px 0px 20px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #000; font-size: 20px"><strong>CHECK OUT OUR AWESOME AGENDA!</strong></span></div><div></div></div></td>
              </tr>
            </tbody>
          </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="0f986857-87df-4c0e-934f-e77105f78192">
              <tbody>
                <tr>
                  <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                      <tbody>
                        <tr>
                        <td align="center" bgcolor="#ffecea" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                          <a href="https://confrontjs.netlify.app/agenda" style="background-color:#a64ac9; border: none; border-radius:7px; color:white; display:inline-block; font-size:12px; font-weight:700; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;" target="_blank">AGENDA</a>
                        </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9bbc393c-c337-4d1a-b9f9-f20c740a0d44">
            <tbody>
              <tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
                </td>
              </tr>
            </tbody>
          </table>
              <tbody>
                <tr>
                  <td align="center" bgcolor="#5e99d3" class="outer-td" style="padding:20px 0px 20px 0px; background-color:#5e99d3;">
                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                      <tbody>
                        <tr>
                        <td align="center" bgcolor="#5e99d3" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a href="https://sendgrid.com/" style="background-color:#f5f8fd; border:1px solid #f5f8fd; border-color:#f5f8fd; border-radius:25px; border-width:1px; color:#a8b9d5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank">♥ POWERED BY TWILIO SENDGRID</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table></td>
                                              </tr>
                                            </table>
                                            <!--[if mso]>
                                          </td>
                                        </tr>
                                      </table>
                                    </center>
                                    <![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>
            </body>
          </html>`,
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
