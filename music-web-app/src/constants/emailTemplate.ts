
async function template (uniqueCode : string){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .email-container {
            max-width: 600px;
            width: 100%;
            background: #ffffff;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            animation: slideIn 0.6s ease-out;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 50px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .icon-wrapper {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            position: relative;
            z-index: 1;
        }
        
        .icon-wrapper svg {
            width: 40px;
            height: 40px;
            stroke: white;
            fill: none;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        
        .header h1 {
            color: #ffffff;
            font-size: 32px;
            font-weight: 700;
            margin: 0;
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 50px 40px;
            text-align: center;
        }
        
        .content h2 {
            color: #1a202c;
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .content p {
            color: #4a5568;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        
        .verify-button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            text-decoration: none;
            padding: 16px 50px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
            position: relative;
            overflow: hidden;
        }
        
        .verify-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
        }
        
        .verify-button:hover::before {
            left: 100%;
        }
        
        .verify-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }
        
        .divider {
            margin: 40px 0;
            text-align: center;
            position: relative;
        }
        
        .divider::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
        }
        
        .divider span {
            background: #ffffff;
            padding: 0 20px;
            color: #a0aec0;
            font-size: 14px;
            position: relative;
        }
        
        .link-section {
            background: #f7fafc;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
        }
        
        .link-section p {
            font-size: 14px;
            color: #718096;
            margin-bottom: 10px;
        }
        
        .verification-link {
            word-break: break-all;
            color: #667eea;
            font-size: 14px;
            text-decoration: none;
        }
        
        .footer {
            background: #f7fafc;
            padding: 30px 40px;
            text-align: center;
            color: #718096;
            font-size: 14px;
            line-height: 1.6;
        }
        
        .security-note {
            background: #fff5f5;
            border-left: 4px solid #fc8181;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            text-align: left;
        }
        
        .security-note p {
            color: #742a2a;
            font-size: 14px;
            margin: 0;
        }
        
        @media (max-width: 600px) {
            .email-container {
                border-radius: 0;
            }
            
            .header, .content, .footer {
                padding: 30px 20px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            .content h2 {
                font-size: 20px;
            }
            
            .verify-button {
                padding: 14px 40px;
                font-size: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="icon-wrapper">
                <svg viewBox="0 0 24 24">
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
            </div>
            <h1>Verify Your Email Address</h1>
        </div>
        
        <div class="content">
            <h2>Welcome aboard! 🎉</h2>
            <p>
                Thanks for signing up! We're excited to have you. To complete your registration and start using our services, please verify your email address by clicking the button below.
            </p>
            
            <a href="https://yourwebsite.com/verify?token=${uniqueCode}" target="_blank" class="verify-button">Verify Email Address</a>
            
            <div class="divider">
                <span>OR</span>
            </div>
            
            <div class="link-section">
                <p>If the button doesn't work, copy and paste this link into your browser:</p>
                <a href="#" class="verification-link">https://yourwebsite.com/verify?token=${uniqueCode}</a>
            </div>
            
            <div class="security-note">
                <p>
                    <strong>⚠️ Security Note:</strong> This verification link will expire in 24 hours. If you didn't create an account, you can safely ignore this email.
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p>
                <strong>Need help?</strong> Contact our support team at support@yourwebsite.com
            </p>
            <p style="margin-top: 15px;">
                © 2025 Your Company Name. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>`

}