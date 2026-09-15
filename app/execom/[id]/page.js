import Link from "next/link";
import { notFound } from "next/navigation";
import { getExecomMemberById } from "@/src/lib/execomData";
import supabase from "@/src/lib/db";

export const revalidate = 0;

function getImageSrc(img) {
    if (!img) return "/assets/avatar.webp";
    if (typeof img === "string" && (img.startsWith("/") || img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:"))) {
        return img;
    }
    return `data:image/webp;base64,${img}`;
}

function getInstagramUrl(handle) {
    if (!handle) return "#";
    if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
    const cleanHandle = handle.replace(/^@/, "").trim();
    return `https://www.instagram.com/${cleanHandle}`;
}

function getGithubUrl(handle) {
    if (!handle) return "#";
    if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
    const cleanHandle = handle.replace(/^@/, "").trim();
    return `https://github.com/${cleanHandle}`;
}

function getLinkedinUrl(handle) {
    if (!handle) return "#";
    if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
    const cleanHandle = handle.replace(/^@/, "").trim();
    return `https://www.linkedin.com/in/${cleanHandle}`;
}

function getEmailUrl(email) {
    if (!email) return "#";
    return `mailto:${email.trim()}`;
}

async function getMember(id) {
    // 1. Check local static execom data first
    const localMember = getExecomMemberById(id);
    if (localMember) return localMember;

    // 2. Check Supabase student_execom
    try {
        const { data: student } = await supabase
            .from("student_execom")
            .select("*")
            .eq("id", id)
            .single();
        if (student) return student;
    } catch {}

    // 3. Check Supabase faculty_execom
    try {
        const { data: faculty } = await supabase
            .from("faculty_execom")
            .select("*")
            .eq("id", id)
            .single();
        if (faculty) return faculty;
    } catch {}

    return null;
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const member = await getMember(id);
    if (!member) return { title: "Execom Member | IEEE SB BMCE" };
    return {
        title: `${member.name} | IEEE SB BMCE`,
        description: `Profile of ${member.name}, ${member.role} at IEEE Student Branch BMCE.`,
    };
}

export default async function MemberProfilePage({ params }) {
    const { id } = await params;
    const member = await getMember(id);

    if (!member) {
        notFound();
    }

    return (
        <div className="page-container">
            <div className="top-bar">
                <Link href="/execom" className="back-btn" aria-label="Back to Execom" title="Back to Execom">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
            </div>

            <main className="profile-card">
                {/* Left Column: Portrait & Info */}
                <div className="profile-left">
                    <div className="avatar-glow-wrap">
                        <div className="avatar-wrapper">
                            <img
                                className="profile-avatar"
                                src={getImageSrc(member.image)}
                                alt={member.name}
                            />
                        </div>
                    </div>

                    <h1 className="student-name">{member.name}</h1>
                    <p className="student-role">{member.role}</p>
                    <div className="accent-bar"></div>
                </div>

                {/* Center Divider */}
                <div className="card-divider" aria-hidden="true"></div>

                {/* Right Column: Connect Tiles */}
                <div className="profile-right">
                    <div className="connect-header">
                        <h2 className="connect-title">Connect & Contact</h2>
                        <div className="connect-accent-bar"></div>
                    </div>

                    <div className="connect-list">
                        {/* Instagram */}
                        {member.instagram && (
                            <a
                                href={getInstagramUrl(member.instagram)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="connect-card instagram-tile"
                            >
                                <div className="icon-box instagram-box">
                                    <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </div>
                                <div className="card-text">
                                    <span className="card-platform-title">Instagram</span>
                                </div>
                                <span className="card-arrow">↗</span>
                            </a>
                        )}

                        {/* LinkedIn */}
                        {member.linkedin && (
                            <a
                                href={getLinkedinUrl(member.linkedin)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="connect-card linkedin-tile"
                            >
                                <div className="icon-box linkedin-box">
                                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72z"/>
                                    </svg>
                                </div>
                                <div className="card-text">
                                    <span className="card-platform-title">LinkedIn</span>
                                </div>
                                <span className="card-arrow">↗</span>
                            </a>
                        )}

                        {/* GitHub */}
                        {member.github && (
                            <a
                                href={getGithubUrl(member.github)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="connect-card github-tile"
                            >
                                <div className="icon-box github-box">
                                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                    </svg>
                                </div>
                                <div className="card-text">
                                    <span className="card-platform-title">GitHub</span>
                                </div>
                                <span className="card-arrow">↗</span>
                            </a>
                        )}

                        {/* Email */}
                        {member.email && (
                            <a href={getEmailUrl(member.email)} className="connect-card email-tile">
                                <div className="icon-box email-box">
                                    <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="card-text">
                                    <span className="card-label">Email</span>
                                    <span className="card-value">{member.email}</span>
                                </div>
                                <span className="card-arrow">↗</span>
                            </a>
                        )}

                        {!member.instagram && !member.github && !member.linkedin && !member.email && (
                            <div className="empty-notice">
                                <p>Executive Committee Member</p>
                                <span>IEEE Student Branch BMCE</span>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
