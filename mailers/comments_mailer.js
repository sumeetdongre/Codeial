const nodemailer=require('../config/nodemailer');


//this is another way of exporting methods

exports.newComment=(comment)=>{
    console.log('inside newComment mailer', comment);
    let htmlstring=nodemailer.renderTemplate({comment: comment},'/comments/new_comments.js');
    nodemailer.transporter.sendMail({

        form: 'sumeetdongre123@gmail.com',
        to: comment.user.email,
        subject:"New Comment Published",
        html: htmlstring

    },(err,info)=>{
        if(err)
        {
            console.log('Error in sending mail',err);
            return;
        }
        console.log('Message sent',info);
        return;
    });
}