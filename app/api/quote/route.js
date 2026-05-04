import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        // Parse the FormData
        const formData = await request.formData();

        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const productType = formData.get('productType');
        const quantity = formData.get('quantity');
        const description = formData.get('description');
        const deadline = formData.get('deadline');
        const designFile = formData.get('design'); // This is the uploaded file

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Prepare email attachments
        const attachments = [];

        if (designFile && designFile.size > 0) {
            const bytes = await designFile.arrayBuffer();
            const buffer = Buffer.from(bytes);

            attachments.push({
                filename: designFile.name,
                content: buffer,
                contentType: designFile.type,
            });
        }

        const productTypeFormatted =
            {
                'business-cards': 'Business Cards',
                flyers: 'Flyers & Brochures',
                booklets: 'Booklets & Catalogs',
                stickers: 'Stickers & Labels',
                'large-format': 'Large Format Printing',
                packaging: 'Packaging Design',
                other: 'Other / Custom',
            }[productType] || productType;

        // Email content
        const mailOptions = {
            from: `"Jonadest Prints" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Quote Request - ${fullName}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #0a0a0a; }
                        .header { background: #0a0a0a; color: #fafafa; padding: 30px; text-align: center; }
                        .header h1 { margin: 0; font-size: 24px; }
                        .subheader { color: #ccc; font-size: 14px; margin-top: 5px; }
                        .content { padding: 30px; background: #fafafa; }
                        .field { margin-bottom: 20px; border-bottom: 1px solid #e5e5e5; padding-bottom: 15px; }
                        .label { font-weight: bold; color: #737373; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
                        .value { color: #0a0a0a; font-size: 16px; }
                        .footer { background: #171717; color: #999; padding: 20px 30px; text-align: center; font-size: 12px; }
                        .highlight-box { background: #0a0a0a; color: #fafafa; padding: 15px; margin: 20px 0; border-left: 4px solid #333; }
                        .attachment-note { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; color: #856404; font-size: 14px; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>🖨️ Jonadest Prints</h1>
                        <div class="subheader">New Quote Request Received</div>
                    </div>
                    
                    <div class="content">
                        <h2 style="color: #0a0a0a; margin-top: 0;">Customer Information</h2>
                        
                        <div class="field">
                            <div class="label">Full Name</div>
                            <div class="value">${fullName}</div>
                        </div>
                        
                        <div class="field">
                            <div class="label">Email Address</div>
                            <div class="value">${email}</div>
                        </div>
                        
                        <div class="field">
                            <div class="label">Phone Number</div>
                            <div class="value">${phone}</div>
                        </div>
                        
                        <div class="field">
                            <div class="label">Delivery Address</div>
                            <div class="value">${address || 'Not provided'}</div>
                        </div>
                        
                        <h2 style="color: #0a0a0a; margin-top: 30px;">Project Details</h2>
                        
                        <div class="highlight-box">
                            <div style="font-size: 12px; color: #ccc; margin-bottom: 5px;">PRODUCT TYPE</div>
                            <div style="font-size: 18px; font-weight: bold;">${productTypeFormatted}</div>
                        </div>
                        
                        <div class="field">
                            <div class="label">Quantity</div>
                            <div class="value">${quantity}</div>
                        </div>
                        
                        <div class="field">
                            <div class="label">Deadline</div>
                            <div class="value">${deadline}</div>
                        </div>
                        
                        <div class="field">
                            <div class="label">Project Description</div>
                            <div class="value">${description || 'No description provided'}</div>
                        </div>

                        ${
                            designFile
                                ? `
                        <div class="attachment-note">
                            📎 <strong>Design/Sample file attached:</strong> ${designFile.name} (${(designFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </div>
                        `
                                : ''
                        }
                        
                        <div style="margin-top: 30px; padding: 20px; background: #f0f0f0; border-radius: 5px;">
                            <p style="margin: 0; color: #666;">
                                📅 Received on: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p>This quote request was submitted through the Jonadest Prints website.</p>
                        <p style="margin-top: 5px;">© ${new Date().getFullYear()} Jonadest Prints. All rights reserved.</p>
                    </div>
                </body>
                </html>
            `,
            attachments: attachments,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Quote request sent successfully' },
            { status: 200 },
        );
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send quote request' },
            { status: 500 },
        );
    }
}
