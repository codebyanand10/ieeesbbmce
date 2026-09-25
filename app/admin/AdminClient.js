"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    loginAdmin,
    addEvent,
    updateEvent,
    deleteEvent,
    addFacExecom,
    updateFacExecom,
    deleteFacExecom,
    addStdExecom,
    updateStdExecom,
    deleteStdExecom,
} from "./actions";

export default function AdminClient({ initialEvents, initialFaculty, initialStudents }) {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(false);
    const [authError, setAuthError] = useState("");
    const [feedback, setFeedback] = useState({ message: "", type: "" });
    const [tabIndex, setTabIndex] = useState(0);

    const [events, setEvents] = useState(initialEvents || []);
    const [facultyList, setFacultyList] = useState(initialFaculty || []);
    const [studentList, setStudentList] = useState(initialStudents || []);

    const [eventImgPreview, setEventImgPreview] = useState("");
    const [facImgPreview, setFacImgPreview] = useState("");
    const [studentImgPreview, setStudentImgPreview] = useState("");
    const [loading, setLoading] = useState(false);

    // Keep state in sync with server props
    useEffect(() => {
        if (initialEvents) setEvents(initialEvents);
    }, [initialEvents]);

    useEffect(() => {
        if (initialFaculty) setFacultyList(initialFaculty);
    }, [initialFaculty]);

    useEffect(() => {
        if (initialStudents) setStudentList(initialStudents);
    }, [initialStudents]);

    // Restore authentication state from localStorage
    useEffect(() => {
        try {
            const savedAuth = localStorage.getItem("ieee_admin_auth");
            if (savedAuth === "true") {
                setIsAuth(true);
            }
        } catch (e) {
            console.error("Storage access error:", e);
        }
    }, []);

    const showNotification = (message, type = "success") => {
        setFeedback({ message, type });
        setTimeout(() => {
            setFeedback({ message: "", type: "" });
        }, 4000);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setAuthError("");
        const formData = new FormData(e.currentTarget);
        const res = await loginAdmin(formData);
        setLoading(false);
        if (res.auth) {
            setIsAuth(true);
            try {
                localStorage.setItem("ieee_admin_auth", "true");
            } catch (err) {
                console.error("Storage error:", err);
            }
        } else {
            setAuthError(res.error || "Invalid username or password");
        }
    };

    const handleLogout = () => {
        try {
            localStorage.removeItem("ieee_admin_auth");
        } catch (err) {
            console.error("Storage error:", err);
        }
        setIsAuth(false);
    };

    const handleAddEvent = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        const formData = new FormData(form);
        const res = await addEvent(formData);
        setLoading(false);

        if (res.success) {
            if (res.data) {
                setEvents((prev) => [res.data, ...prev.filter((item) => item.id !== res.data.id)]);
            }
            form.reset();
            setEventImgPreview("");
            showNotification("Event added successfully! Displayed at the top.");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to add event.", "error");
        }
    };

    const handleUpdateEvent = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const res = await updateEvent(formData);
        setLoading(false);

        if (res.success) {
            if (res.data) {
                setEvents((prev) => prev.map((ev) => (ev.id === res.data.id ? res.data : ev)));
            }
            showNotification("Event updated successfully!");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to update event.", "error");
        }
    };

    const handleDeleteEvent = async (id) => {
        if (!confirm("Are you sure you want to delete this event?")) return;
        setLoading(true);
        const res = await deleteEvent(id);
        setLoading(false);

        if (res.success) {
            setEvents((prev) => prev.filter((ev) => ev.id !== id));
            showNotification("Event deleted successfully!");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to delete event.", "error");
        }
    };

    const handleAddFac = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        const formData = new FormData(form);
        const res = await addFacExecom(formData);
        setLoading(false);

        if (res.success) {
            if (res.data) {
                setFacultyList((prev) => [...prev, res.data]);
            }
            form.reset();
            setFacImgPreview("");
            showNotification("Faculty member added successfully!");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to add faculty member.", "error");
        }
    };

    const handleUpdateFac = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const res = await updateFacExecom(formData);
        setLoading(false);

        if (res.success) {
            if (res.data) {
                setFacultyList((prev) => prev.map((f) => (f.id === res.data.id ? res.data : f)));
            }
            showNotification("Faculty member updated successfully!");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to update faculty member.", "error");
        }
    };

    const handleDeleteFac = async (id) => {
        if (!confirm("Are you sure you want to delete this faculty member?")) return;
        setLoading(true);
        const res = await deleteFacExecom(id);
        setLoading(false);

        if (res.success) {
            setFacultyList((prev) => prev.filter((f) => f.id !== id));
            showNotification("Faculty member deleted successfully!");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to delete faculty member.", "error");
        }
    };

    const handleAddStd = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        const formData = new FormData(form);
        const res = await addStdExecom(formData);
        setLoading(false);

        if (res.success) {
            if (res.data) {
                setStudentList((prev) => [...prev, res.data]);
            }
            form.reset();
            setStudentImgPreview("");
            showNotification("Student member added successfully!");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to add student member.", "error");
        }
    };

    const handleUpdateStd = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const res = await updateStdExecom(formData);
        setLoading(false);

        if (res.success) {
            if (res.data) {
                setStudentList((prev) => prev.map((s) => (s.id === res.data.id ? res.data : s)));
            }
            showNotification("Student member updated successfully!");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to update student member.", "error");
        }
    };

    const handleDeleteStd = async (id) => {
        if (!confirm("Are you sure you want to delete this student execom member?")) return;
        setLoading(true);
        const res = await deleteStdExecom(id);
        setLoading(false);

        if (res.success) {
            setStudentList((prev) => prev.filter((s) => s.id !== id));
            showNotification("Student member deleted successfully!");
            router.refresh();
        } else {
            showNotification(res.error || "Failed to delete student member.", "error");
        }
    };

    const getImgSrc = (img, fallback) => {
        if (!img) return fallback;
        if (typeof img === "string" && (img.startsWith("/") || img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:"))) {
            return img;
        }
        return `data:image/webp;base64,${img}`;
    };

    if (!isAuth) {
        return (
            <div className="main-login">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2 className="login-title">Admin Portal</h2>
                    {authError && <div className="error-msg">{authError}</div>}
                    <label className="login-form-label">
                        Username
                        <input className="login-form-textbox" name="username" type="text" required />
                    </label>
                    <label className="login-form-label">
                        Password
                        <input className="login-form-textbox" name="password" type="password" required />
                    </label>
                    <button className="login-form-button" type="submit" disabled={loading}>
                        {loading ? "Authenticating..." : "Log in"}
                    </button>
                </form>

                <style jsx>{`
                    .main-login {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 70vh;
                        padding: 20px;
                    }
                    .login-form {
                        background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
                        border-radius: 24px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        padding: 40px;
                        width: 100%;
                        max-width: 420px;
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
                    }
                    .login-title {
                        text-align: center;
                        font-family: 'Open Sans', sans-serif;
                        color: white;
                        margin-bottom: 10px;
                    }
                    .error-msg {
                        background: rgba(239, 68, 68, 0.2);
                        border: 1px solid rgba(239, 68, 68, 0.5);
                        color: #fca5a5;
                        padding: 10px;
                        border-radius: 8px;
                        font-size: 14px;
                        text-align: center;
                    }
                    .login-form-label {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                        color: #cbd5e1;
                        font-size: 14px;
                        font-weight: 600;
                    }
                    .login-form-textbox {
                        background: rgba(255, 255, 255, 0.08);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: 12px;
                        padding: 12px;
                        color: white;
                        font-size: 16px;
                        outline: none;
                        transition: border-color 0.2s;
                    }
                    .login-form-textbox:focus {
                        border-color: #6366f1;
                    }
                    .login-form-button {
                        background: linear-gradient(135deg, #6366f1, #01267f);
                        color: white;
                        border: none;
                        border-radius: 12px;
                        padding: 14px;
                        font-size: 16px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s ease;
                        margin-top: 10px;
                    }
                    .login-form-button:hover {
                        opacity: 0.9;
                        transform: scale(1.02);
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="main">
            <div className="admin-header-actions">
                <div className="tabbar">
                    <button
                        className="tabbar-button"
                        style={{ backgroundColor: tabIndex === 0 ? "#01267f99" : "transparent" }}
                        onClick={() => setTabIndex(0)}
                    >
                        Events
                    </button>
                    <button
                        className="tabbar-button"
                        style={{ backgroundColor: tabIndex === 1 ? "#01267f99" : "transparent" }}
                        onClick={() => setTabIndex(1)}
                    >
                        Execom
                    </button>
                </div>
                <button className="logout-button" onClick={handleLogout} title="Log out of Admin Dashboard">
                    Sign Out
                </button>
            </div>

            {feedback.message && (
                <div className={`toast-notification ${feedback.type === "error" ? "toast-error" : "toast-success"}`}>
                    {feedback.message}
                </div>
            )}

            {tabIndex === 0 && (
                <div className="admin-section">
                    <h1 className="events-head">Manage Events</h1>

                    <form className="event-grid-admin add-card" onSubmit={handleAddEvent}>
                        <h2>Add New Event</h2>
                        <input type="text" className="form-input" name="event-name" placeholder="Event Name" required />
                        <textarea className="form-input" name="event-description" placeholder="Event Description" rows="3" required />
                        <input type="date" className="form-input" name="event-date" required />
                        <input type="text" className="form-input" name="event-venue" placeholder="Event Venue" required />
                        <input type="url" className="form-input" name="event-reglink" placeholder="Event Registration Link" />
                        <select className="form-input" name="event-status" defaultValue="1">
                            <option value="1">Coming Soon</option>
                            <option value="2">Register Now</option>
                            <option value="3">Registration Closed</option>
                            <option value="4">Ongoing</option>
                            <option value="5">Event Completed</option>
                        </select>

                        <div className="img-picker-wrap">
                            <img className="preview-img" src={eventImgPreview || "/assets/placehold.webp"} alt="Preview" />
                            <input
                                type="file"
                                name="event-img"
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files?.[0]) {
                                        setEventImgPreview(URL.createObjectURL(e.target.files[0]));
                                    }
                                }}
                            />
                        </div>

                        <button className="btn-apply" type="submit" disabled={loading}>
                            {loading ? "Adding Event..." : "+ Add Event"}
                        </button>
                    </form>

                    <div className="items-list">
                        {events.map((event) => (
                            <form key={event.id} className="event-grid-admin" onSubmit={handleUpdateEvent}>
                                <input type="hidden" name="id" value={event.id} />
                                <input type="text" className="form-input" name="event-name" defaultValue={event.name} placeholder="Event Name" required />
                                <textarea className="form-input" name="event-description" defaultValue={event.description} placeholder="Event Description" rows="3" required />
                                <input type="date" className="form-input" name="event-date" defaultValue={event.date} required />
                                <input type="text" className="form-input" name="event-venue" defaultValue={event.venue} placeholder="Event Venue" required />
                                <input type="url" className="form-input" name="event-reglink" defaultValue={event.reglink} placeholder="Event Registration Link" />
                                <select className="form-input" name="event-status" defaultValue={event.status}>
                                    <option value="1">Coming Soon</option>
                                    <option value="2">Register Now</option>
                                    <option value="3">Registration Closed</option>
                                    <option value="4">Ongoing</option>
                                    <option value="5">Event Completed</option>
                                </select>

                                <div className="img-picker-wrap">
                                    <img className="preview-img" src={getImgSrc(event.image, "/assets/placehold.webp")} alt="Event Poster" />
                                    <input type="file" name="event-img" accept="image/*" />
                                </div>

                                <div className="btn-group">
                                    <button className="btn-apply" type="submit" disabled={loading}>Apply Changes</button>
                                    <button className="btn-delete" type="button" onClick={() => handleDeleteEvent(event.id)} disabled={loading}>Remove</button>
                                </div>
                            </form>
                        ))}
                    </div>
                </div>
            )}

            {tabIndex === 1 && (
                <div className="admin-section">
                    <h1 className="events-head">Faculty Execom</h1>
                    <div className="faculty-admin-grid">
                        <form className="fac-card add-card" onSubmit={handleAddFac}>
                            <h2>Add Faculty Member</h2>
                            <input type="text" className="form-input" name="name" placeholder="Faculty Name" required />
                            <input type="text" className="form-input" name="role" placeholder="Faculty Role" required />
                            <div className="img-picker-wrap">
                                <img className="preview-img" src={facImgPreview || "/assets/avatar.webp"} alt="Preview" />
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files?.[0]) {
                                            setFacImgPreview(URL.createObjectURL(e.target.files[0]));
                                        }
                                    }}
                                />
                            </div>
                            <button className="btn-apply" type="submit" disabled={loading}>
                                {loading ? "Adding..." : "+ Add Faculty"}
                            </button>
                        </form>

                        {facultyList.map((fac) => (
                            <form key={fac.id} className="fac-card" onSubmit={handleUpdateFac}>
                                <input type="hidden" name="id" value={fac.id} />
                                <img className="fac-preview-img" src={getImgSrc(fac.image, "/assets/avatar.webp")} alt={fac.name} />
                                <input type="text" className="form-input" name="name" defaultValue={fac.name} placeholder="Faculty Name" required />
                                <input type="text" className="form-input" name="role" defaultValue={fac.role} placeholder="Faculty Role" required />
                                <input type="file" name="image" accept="image/*" />
                                <div className="btn-group">
                                    <button className="btn-apply" type="submit" disabled={loading}>Apply</button>
                                    <button className="btn-delete" type="button" onClick={() => handleDeleteFac(fac.id)} disabled={loading}>Remove</button>
                                </div>
                            </form>
                        ))}
                    </div>

                    <h1 className="events-head" style={{ marginTop: "48px" }}>Student Execom</h1>
                    <div className="faculty-admin-grid">
                        <form className="fac-card add-card" onSubmit={handleAddStd}>
                            <h2>Add Student Member</h2>
                            <input type="text" className="form-input" name="name" placeholder="Student Name" required />
                            <input type="text" className="form-input" name="role" placeholder="Student Role" required />
                            <input type="text" className="form-input" name="instagram" placeholder="Instagram (URL or handle)" />
                            <input type="text" className="form-input" name="github" placeholder="GitHub (URL or handle)" />
                            <input type="text" className="form-input" name="linkedin" placeholder="LinkedIn (URL or handle)" />
                            <input type="email" className="form-input" name="email" placeholder="Email Address" />
                            <input type="tel" className="form-input" name="phone" placeholder="Phone Number" />
                            <div className="img-picker-wrap">
                                <img className="preview-img" src={studentImgPreview || "/assets/avatar.webp"} alt="Preview" />
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files?.[0]) {
                                            setStudentImgPreview(URL.createObjectURL(e.target.files[0]));
                                        }
                                    }}
                                />
                            </div>
                            <button className="btn-apply" type="submit" disabled={loading}>
                                {loading ? "Adding..." : "+ Add Student"}
                            </button>
                        </form>

                        {studentList.map((std) => (
                            <form key={std.id} className="fac-card" onSubmit={handleUpdateStd}>
                                <input type="hidden" name="id" value={std.id} />
                                <img className="fac-preview-img" src={getImgSrc(std.image, "/assets/avatar.webp")} alt={std.name} />
                                <input type="text" className="form-input" name="name" defaultValue={std.name} placeholder="Student Name" required />
                                <input type="text" className="form-input" name="role" defaultValue={std.role} placeholder="Student Role" required />
                                <input type="text" className="form-input" name="instagram" defaultValue={std.instagram || ""} placeholder="Instagram" />
                                <input type="text" className="form-input" name="github" defaultValue={std.github || ""} placeholder="GitHub" />
                                <input type="text" className="form-input" name="linkedin" defaultValue={std.linkedin || ""} placeholder="LinkedIn" />
                                <input type="email" className="form-input" name="email" defaultValue={std.email || ""} placeholder="Email" />
                                <input type="tel" className="form-input" name="phone" defaultValue={std.phone || ""} placeholder="Phone" />
                                <input type="file" name="image" accept="image/*" />
                                <div className="btn-group">
                                    <button className="btn-apply" type="submit" disabled={loading}>Apply</button>
                                    <button className="btn-delete" type="button" onClick={() => handleDeleteStd(std.id)} disabled={loading}>Remove</button>
                                </div>
                            </form>
                        ))}
                    </div>
                </div>
            )}

            <style jsx>{`
                .admin-header-actions {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    max-width: 1200px;
                    margin: 24px auto;
                    width: 90%;
                }
                .tabbar {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                }
                .logout-button {
                    position: absolute;
                    right: 0;
                    background: rgba(239, 68, 68, 0.15);
                    color: #fca5a5;
                    border: 1px solid rgba(239, 68, 68, 0.4);
                    border-radius: 9999px;
                    padding: 8px 18px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .logout-button:hover {
                    background: rgba(239, 68, 68, 0.3);
                    color: white;
                    border-color: #ef4444;
                }
                .toast-notification {
                    max-width: 600px;
                    margin: 0 auto 20px auto;
                    padding: 12px 20px;
                    border-radius: 12px;
                    text-align: center;
                    font-weight: 600;
                    animation: fadeIn 0.3s ease;
                }
                .toast-success {
                    background: rgba(34, 197, 94, 0.2);
                    border: 1px solid rgba(34, 197, 94, 0.5);
                    color: #86efac;
                }
                .toast-error {
                    background: rgba(239, 68, 68, 0.2);
                    border: 1px solid rgba(239, 68, 68, 0.5);
                    color: #fca5a5;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .tabbar-button {
                    font-family: 'Open Sans', sans-serif;
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 9999px;
                    padding: 10px 24px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .tabbar-button:hover {
                    border-color: #6366f1;
                }
                .events-head {
                    text-align: center;
                    color: white;
                    font-family: 'Open Sans', sans-serif;
                    margin: 16px 0 24px 0;
                }
                .admin-section {
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 90%;
                }
                .event-grid-admin, .fac-card {
                    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                }
                .add-card {
                    border: 2px dashed #6366f1;
                    margin-bottom: 32px;
                }
                .add-card h2 {
                    color: white;
                    font-size: 1.2rem;
                    margin-bottom: 8px;
                }
                .items-list {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                .form-input {
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    padding: 10px 14px;
                    color: white;
                    font-family: 'Open Sans', sans-serif;
                    font-size: 14px;
                    outline: none;
                }
                .form-input:focus {
                    border-color: #6366f1;
                }
                .img-picker-wrap {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .preview-img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }
                .fac-preview-img {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    object-fit: cover;
                    align-self: center;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }
                .btn-group {
                    display: flex;
                    gap: 12px;
                    margin-top: 8px;
                }
                .btn-apply {
                    background: #6366f1;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 10px 20px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn-apply:hover {
                    background: #4f46e5;
                }
                .btn-delete {
                    background: rgba(239, 68, 68, 0.8);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 10px 20px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn-delete:hover {
                    background: #dc2626;
                }
                .faculty-admin-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 24px;
                }
                @media (max-width: 600px) {
                    .admin-header-actions {
                        flex-direction: column;
                        gap: 16px;
                    }
                    .logout-button {
                        position: static;
                    }
                }
            `}</style>
        </div>
    );
}
