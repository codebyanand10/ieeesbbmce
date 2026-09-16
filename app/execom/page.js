import Link from "next/link";
import { getStaffExecomMembers, getExecomMembers } from "@/src/lib/execomData";
import supabase from "@/src/lib/db";

export const metadata = {
    title: "Executive Committee | IEEE SB BMCE",
    description: "Meet the staff advisors and student leaders of IEEE Student Branch BMCE.",
};

export const revalidate = 0;

function getImageSrc(img) {
    if (!img) return "/assets/avatar.webp";
    if (typeof img === "string" && (img.startsWith("/") || img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:"))) {
        return img;
    }
    return `data:image/webp;base64,${img}`;
}

async function getDbFacultyExecom() {
    try {
        const { data } = await supabase
            .from("faculty_execom")
            .select("*")
            .order("id", { ascending: true });
        return data || [];
    } catch {
        return [];
    }
}

export default async function ExecomPage() {
    const dbFacultyList = await getDbFacultyExecom();
    const staticStaffList = getStaffExecomMembers();
    const staffList = [...staticStaffList, ...dbFacultyList];
    const studentList = getExecomMembers();

    return (
        <div className="main">
            {/* Staff Execom Section */}
            {staffList.length > 0 && (
                <>
                    <h1 className="faculty-head">Staff Execom</h1>
                    <div className="faculty-div">
                        {staffList.map((staff) => (
                            <Link
                                key={staff.id}
                                className="faculty-grid clickable-card"
                                href={`/execom/${staff.slug || staff.id}`}
                            >
                                <div className="faculty-img-label">
                                    <img
                                        className="faculty-img"
                                        src={getImageSrc(staff.image)}
                                        alt={staff.name}
                                    />
                                </div>
                                <div className="faculty-name">{staff.name}</div>
                                <div className="faculty-role">{staff.role}</div>
                                <div className="card-action-hint">
                                    <span>View Profile</span>
                                    <svg className="hint-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}

            {/* Student Execom Section */}
            <h1 className="faculty-head" style={{ marginTop: staffList.length > 0 ? "48px" : "36px" }}>
                Student Execom
            </h1>
            <div className="faculty-div">
                {studentList.map((student) => (
                    <Link
                        key={student.id}
                        className="faculty-grid clickable-card"
                        href={`/execom/${student.slug || student.id}`}
                    >
                        <div className="faculty-img-label">
                            <img
                                className="faculty-img"
                                src={getImageSrc(student.image)}
                                alt={student.name}
                            />
                        </div>
                        <div className="faculty-name">{student.name}</div>
                        <div className="faculty-role">{student.role}</div>
                        <div className="card-action-hint">
                            <span>View Profile</span>
                            <svg className="hint-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
