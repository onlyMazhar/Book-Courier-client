import React from 'react';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';
import Container from '../../Components/Container';

const PrivacyPolicyPage = () => {
    const lastUpdated = "January 15, 2025";

    const sections = [
        {
            title: "Information We Collect",
            icon: <Database size={24} />,
            content: [
                {
                    subtitle: "Personal Information",
                    details: [
                        "Name, email address, and phone number when you create an account",
                        "Delivery address and payment information for order processing",
                        "Profile information including reading preferences and interests",
                        "Communication history with our support team"
                    ]
                },
                {
                    subtitle: "Usage Information",
                    details: [
                        "Books you browse, search for, and rent",
                        "Device information including IP address, browser type, and operating system",
                        "Location data for delivery purposes (with your consent)",
                        "Cookies and similar tracking technologies for website functionality"
                    ]
                },
                {
                    subtitle: "Transaction Information",
                    details: [
                        "Order history, rental periods, and return dates",
                        "Payment method details (securely processed by Stripe)",
                        "Delivery tracking and confirmation data",
                        "Reviews and ratings you provide"
                    ]
                }
            ]
        },
        {
            title: "How We Use Your Information",
            icon: <Eye size={24} />,
            content: [
                {
                    subtitle: "Service Provision",
                    details: [
                        "Process and fulfill your book rental orders",
                        "Coordinate delivery and pickup services",
                        "Provide customer support and resolve issues",
                        "Send order confirmations and delivery updates"
                    ]
                },
                {
                    subtitle: "Personalization",
                    details: [
                        "Recommend books based on your reading history and preferences",
                        "Customize your browsing experience",
                        "Send personalized newsletters and offers (with your consent)",
                        "Improve our book collection based on user demand"
                    ]
                },
                {
                    subtitle: "Business Operations",
                    details: [
                        "Analyze usage patterns to improve our services",
                        "Prevent fraud and ensure platform security",
                        "Comply with legal obligations and resolve disputes",
                        "Communicate important service updates and policy changes"
                    ]
                }
            ]
        },
        {
            title: "Information Sharing",
            icon: <Users size={24} />,
            content: [
                {
                    subtitle: "Service Providers",
                    details: [
                        "Payment processors (Stripe) for secure transaction handling",
                        "Delivery partners for book pickup and delivery services",
                        "Cloud storage providers for data hosting and backup",
                        "Analytics services to understand user behavior (anonymized data)"
                    ]
                },
                {
                    subtitle: "Librarians",
                    details: [
                        "Your name and delivery address for order fulfillment",
                        "Contact information for coordination purposes",
                        "Order details including book titles and rental periods",
                        "Return status and condition reports"
                    ]
                },
                {
                    subtitle: "Legal Requirements",
                    details: [
                        "Government authorities when required by law",
                        "Law enforcement for fraud prevention and investigation",
                        "Legal proceedings to protect our rights and interests",
                        "Regulatory compliance in the book rental industry"
                    ]
                }
            ]
        },
        {
            title: "Data Security",
            icon: <Lock size={24} />,
            content: [
                {
                    subtitle: "Technical Safeguards",
                    details: [
                        "SSL encryption for all data transmission",
                        "Secure servers with regular security updates",
                        "Access controls and authentication systems",
                        "Regular security audits and vulnerability assessments"
                    ]
                },
                {
                    subtitle: "Operational Security",
                    details: [
                        "Employee training on data protection practices",
                        "Limited access to personal information on a need-to-know basis",
                        "Regular backup and disaster recovery procedures",
                        "Incident response plan for potential data breaches"
                    ]
                },
                {
                    subtitle: "Payment Security",
                    details: [
                        "PCI DSS compliant payment processing through Stripe",
                        "No storage of complete credit card information",
                        "Tokenization of payment methods for recurring transactions",
                        "Fraud detection and prevention systems"
                    ]
                }
            ]
        },
        {
            title: "Your Rights",
            icon: <Shield size={24} />,
            content: [
                {
                    subtitle: "Access and Control",
                    details: [
                        "View and update your personal information in your account settings",
                        "Download a copy of your data in a portable format",
                        "Delete your account and associated data (subject to legal requirements)",
                        "Opt-out of marketing communications at any time"
                    ]
                },
                {
                    subtitle: "Privacy Choices",
                    details: [
                        "Control cookie preferences through browser settings",
                        "Manage email notification preferences in your account",
                        "Choose whether to share reading preferences for recommendations",
                        "Limit location data collection for delivery services"
                    ]
                },
                {
                    subtitle: "Data Portability",
                    details: [
                        "Export your reading history and preferences",
                        "Transfer your data to another service (where technically feasible)",
                        "Receive your data in commonly used formats",
                        "Request correction of inaccurate personal information"
                    ]
                }
            ]
        },
        {
            title: "International Transfers",
            icon: <Globe size={24} />,
            content: [
                {
                    subtitle: "Data Location",
                    details: [
                        "Primary data storage in secure facilities within Bangladesh",
                        "Some service providers may process data internationally",
                        "All international transfers comply with applicable data protection laws",
                        "Appropriate safeguards in place for cross-border data transfers"
                    ]
                },
                {
                    subtitle: "Third-Party Services",
                    details: [
                        "Stripe (payment processing) - operates globally with strong privacy protections",
                        "Cloud storage providers with data centers in secure jurisdictions",
                        "Analytics services that anonymize data before international transfer",
                        "Email service providers for transactional and marketing communications"
                    ]
                }
            ]
        }
    ];

    const contactInfo = {
        email: "privacy@bookcourier.com",
        phone: "+880 1234 567890",
        address: "House 123, Road 456, Sector 7, Uttara, Dhaka 1230, Bangladesh"
    };

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed mb-4">
                        Your privacy is important to us. This policy explains how we collect, 
                        use, and protect your personal information.
                    </p>
                    <p className="text-sm text-neutral/50">
                        Last updated: {lastUpdated}
                    </p>
                </div>

                {/* Introduction */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-6">Introduction</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-neutral/70 leading-relaxed mb-4">
                                Book Courier ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                                the security of your personal information. This Privacy Policy describes how we collect, 
                                use, disclose, and safeguard your information when you use our book rental and delivery service.
                            </p>
                            <p className="text-neutral/70 leading-relaxed mb-4">
                                By using our service, you consent to the collection and use of your information as described 
                                in this policy. If you do not agree with our policies and practices, please do not use our service.
                            </p>
                            <p className="text-neutral/70 leading-relaxed">
                                This policy applies to information we collect through our website, mobile application, 
                                and any related services, sales, marketing, or events.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Sections */}
                <div className="py-16">
                    <div className="space-y-16">
                        {sections.map((section, index) => (
                            <div key={index} className="max-w-4xl mx-auto">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-3xl font-black">{section.title}</h2>
                                </div>

                                <div className="space-y-8">
                                    {section.content.map((subsection, idx) => (
                                        <div key={idx} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                                            <h3 className="text-xl font-bold mb-4 text-primary">
                                                {subsection.subtitle}
                                            </h3>
                                            <ul className="space-y-3">
                                                {subsection.details.map((detail, detailIdx) => (
                                                    <li key={detailIdx} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-neutral/70 leading-relaxed">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Retention */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-6">Data Retention</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-primary">Account Information</h3>
                                <p className="text-neutral/70 text-sm mb-3">
                                    We retain your account information for as long as your account is active or as needed to provide services.
                                </p>
                                <p className="text-xs text-neutral/50">
                                    Retention period: Duration of account + 3 years after closure
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-primary">Transaction Records</h3>
                                <p className="text-neutral/70 text-sm mb-3">
                                    Order history and payment records are kept for accounting and legal compliance purposes.
                                </p>
                                <p className="text-xs text-neutral/50">
                                    Retention period: 7 years from transaction date
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-primary">Marketing Data</h3>
                                <p className="text-neutral/70 text-sm mb-3">
                                    Marketing preferences and communication history until you opt-out or request deletion.
                                </p>
                                <p className="text-xs text-neutral/50">
                                    Retention period: Until opt-out or account deletion
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-primary">Usage Analytics</h3>
                                <p className="text-neutral/70 text-sm mb-3">
                                    Anonymized usage data for service improvement and business analytics.
                                </p>
                                <p className="text-xs text-neutral/50">
                                    Retention period: 2 years (anonymized data may be kept longer)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-8">Contact Us About Privacy</h2>
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                            <p className="text-neutral/70 mb-6">
                                If you have questions about this Privacy Policy, want to exercise your rights, 
                                or have concerns about how we handle your personal information, please contact us:
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
                                        <Shield size={24} />
                                    </div>
                                    <h3 className="font-bold mb-2">Privacy Officer</h3>
                                    <p className="text-sm text-neutral/60">{contactInfo.email}</p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
                                        <Users size={24} />
                                    </div>
                                    <h3 className="font-bold mb-2">Support Team</h3>
                                    <p className="text-sm text-neutral/60">{contactInfo.phone}</p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
                                        <Globe size={24} />
                                    </div>
                                    <h3 className="font-bold mb-2">Mailing Address</h3>
                                    <p className="text-sm text-neutral/60">{contactInfo.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Policy Updates */}
                <div className="py-16 bg-blue-50 rounded-3xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-black mb-6">Policy Updates</h2>
                        <p className="text-neutral/70 mb-6">
                            We may update this Privacy Policy from time to time to reflect changes in our practices 
                            or for other operational, legal, or regulatory reasons.
                        </p>
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 text-left">
                            <h3 className="font-bold mb-3">When we update this policy:</h3>
                            <ul className="space-y-2 text-sm text-neutral/70">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    We will post the updated policy on this page
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    We will update the "Last updated" date at the top
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    For significant changes, we will notify you via email
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    Continued use of our service constitutes acceptance of changes
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicyPage;