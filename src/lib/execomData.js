// Execom Members Data
export const execomMembers = [
    {
        id: "1",
        slug: "sreyas",
        name: "Sreyas Kumar A",
        role: "IEEE Chair",
        image: "/ieee/sreyas.png",
        instagram: null,
        github: null,
        linkedin: null,
        email: null,
        phone: null,
    },
    {
        id: "2",
        slug: "joveeta",
        name: "Joveeta Aniyan",
        role: "SB Secretary",
        image: "/ieee/joveeta.png",
        instagram: "https://www.instagram.com/joveeta_aniyan_06?stkn=enhuYWRiNW96d2Y3",
        github: null,
        linkedin: "https://www.linkedin.com/in/joveeta-aniyan-b77275330?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "joveetaaniyan06@gmail.com",
        phone: "9656750365",
    },
    {
        id: "3",
        slug: "ann",
        name: "Ann P. Mathew",
        role: "SB Vice Chair",
        image: "/ieee/ann.png",
        instagram: "https://www.instagram.com/_ann__rachel_?stkn=MXFnd2phMWlmanllaA==",
        github: "https://github.com/annpmathew21-debug",
        linkedin: "https://www.linkedin.com/in/ann-p-mathew-b97431328",
        email: "annpmathew21@gmail.com",
        phone: "7907676181",
    },
    {
        id: "4",
        slug: "agnus",
        name: "Agnus Varghese",
        role: "CS Chair",
        image: "/ieee/agnus.png",
        instagram: "https://www.instagram.com/__agnus__varghese__?stkn=OWdrNWQ1d2Nhbnl2",
        github: null,
        linkedin: "https://www.linkedin.com/in/agnus-varghese-9a88a0369?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "agnusvarghese05@gmail.com",
        phone: "7594870452",
    },
    {
        id: "5",
        slug: "ruben",
        name: "Ruben Koshy",
        role: "Computer Society Secretary,\nLink Representative",
        image: "/ieee/ruben.png",
        instagram: "https://www.instagram.com/_its_me_ruben_?stkn=MzljaGljdDhsZmk2",
        github: "https://github.com/Ruben-15",
        linkedin: "https://www.linkedin.com/in/ruben-koshy-ba7227280?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "rubenkoshy30@gmail.com",
        phone: "9539327382",
    },
    {
        id: "6",
        slug: "amitha",
        name: "Amitha Jom",
        role: "Computer Society Vice Chair, MDC",
        image: "/ieee/amitha.png",
        instagram: "https://www.instagram.com/ami_tha_jom?stkn=MWloeG11Y3g0dXNicQ==",
        github: null,
        linkedin: "https://www.linkedin.com/in/amitha-jom-28b645332?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "amithajom3@gmail.com",
        phone: "8891019388",
    },
    {
        id: "7",
        slug: "mishal",
        name: "Muhammad Mishal Shihab",
        role: "SB Treasurer",
        image: "/ieee/mishal.png",
        instagram: "https://www.instagram.com/_mishal_bin_shihab_?stkn=OHRzMHc3dmdnbnF4",
        github: null,
        linkedin: "https://www.linkedin.com/in/muhammad-mishal-bin-shihab-1b2405326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "mishalshihab75@gmail.com",
        phone: "9072935977",
    },
    {
        id: "8",
        slug: "anand",
        name: "Anand A B",
        role: "Web Master",
        image: "/ieee/anand.png",
        instagram: "i.4_anand",
        github: "codebyanand10",
        linkedin: "anand",
        email: "anandanil107@gmail.com",
        phone: null,
    },
    {
        id: "9",
        slug: "roshini",
        name: "Fathima Roshini Siyad",
        role: "Women In Computing",
        image: "/ieee/roshini.png",
        instagram: "https://www.instagram.com/roshnii.e_?stkn=MW9zdW5kOW02MXZhNA==",
        github: "https://github.com/FATHIMA-ROSHINI",
        linkedin: "https://www.linkedin.com/in/fathima-roshini-siyad-8477292b3",
        email: "roshni.m.k.s20@gmail.com",
        phone: "8547439733",
    },
    {
        id: "10",
        slug: "renesh",
        name: "Renesh Rajesh",
        role: "Project and Technical Coordinator",
        image: "/ieee/reneesh.png",
        instagram: "https://www.instagram.com/re._.nesh?stkn=MTFzdXRiNWlpZzZieA==",
        github: "https://github.com/renesh-42",
        linkedin: "https://www.linkedin.com/in/renesh-rajesh-b853a8280?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "reneshrajesh487@gmail.com",
        phone: "8547282469",
    },
];

export function getExecomMembers() {
    return execomMembers;
}

export function getExecomMemberById(identifier) {
    if (!identifier) return null;
    const clean = String(identifier).toLowerCase().trim();

    return execomMembers.find((m) => {
        if (String(m.id) === clean) return true;
        if (m.slug && m.slug.toLowerCase() === clean) return true;
        if (m.name.toLowerCase() === clean) return true;
        if (m.name.toLowerCase().replace(/[^a-z0-9]/g, "") === clean.replace(/[^a-z0-9]/g, "")) return true;
        if (m.name.toLowerCase().split(" ")[0] === clean) return true;
        if (clean === "reneesh" && (m.slug === "renesh" || m.name.toLowerCase().includes("renesh"))) return true;
        return false;
    });
}
