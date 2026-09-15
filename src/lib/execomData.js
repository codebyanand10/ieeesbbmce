// Execom Members Data using photos from src/ieee
import sreyasImg from "../ieee/sreyas.png";
import joveetaImg from "../ieee/joveeta.png";
import annImg from "../ieee/ann.png";
import agnusImg from "../ieee/agnus.png";
import rubenImg from "../ieee/ruben.png";
import amithaImg from "../ieee/amitha.png";
import mishalImg from "../ieee/mishal.png";
import anandImg from "../ieee/anand.png";
import roshiniImg from "../ieee/roshini.png";
import reneeshImg from "../ieee/reneesh.png";

export const execomMembers = [
    {
        id: "1",
        name: "Sreyas Kumar A",
        role: "IEEE Chair",
        image: sreyasImg,
        instagram: null,
        github: null,
        linkedin: null,
        email: null,
        phone: null,
    },
    {
        id: "2",
        name: "Joveeta Aniyan",
        role: "SB Secretary",
        image: joveetaImg,
        instagram: "https://www.instagram.com/joveeta_aniyan_06?stkn=enhuYWRiNW96d2Y3",
        github: null,
        linkedin: "https://www.linkedin.com/in/joveeta-aniyan-b77275330?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "joveetaaniyan06@gmail.com",
        phone: "9656750365",
    },
    {
        id: "3",
        name: "Ann P. Mathew",
        role: "SB Vice Chair",
        image: annImg,
        instagram: "https://www.instagram.com/_ann__rachel_?stkn=MXFnd2phMWlmanllaA==",
        github: "https://github.com/annpmathew21-debug",
        linkedin: "https://www.linkedin.com/in/ann-p-mathew-b97431328",
        email: "annpmathew21@gmail.com",
        phone: "7907676181",
    },
    {
        id: "4",
        name: "Agnus Varghese",
        role: "CS Chair",
        image: agnusImg,
        instagram: "https://www.instagram.com/__agnus__varghese__?stkn=OWdrNWQ1d2Nhbnl2",
        github: null,
        linkedin: "https://www.linkedin.com/in/agnus-varghese-9a88a0369?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "agnusvarghese05@gmail.com",
        phone: "7594870452",
    },
    {
        id: "5",
        name: "Ruben Koshy",
        role: "Computer Society Secretary,\nLink Representative",
        image: rubenImg,
        instagram: "https://www.instagram.com/_its_me_ruben_?stkn=MzljaGljdDhsZmk2",
        github: "https://github.com/Ruben-15",
        linkedin: "https://www.linkedin.com/in/ruben-koshy-ba7227280?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "rubenkoshy30@gmail.com",
        phone: "9539327382",
    },
    {
        id: "6",
        name: "Amitha Jom",
        role: "Computer Society Vice Chair, MDC",
        image: amithaImg,
        instagram: "https://www.instagram.com/ami_tha_jom?stkn=MWloeG11Y3g0dXNicQ==",
        github: null,
        linkedin: "https://www.linkedin.com/in/amitha-jom-28b645332?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "amithajom3@gmail.com",
        phone: "8891019388",
    },
    {
        id: "7",
        name: "Muhammad Mishal Shihab",
        role: "SB Treasurer",
        image: mishalImg,
        instagram: "https://www.instagram.com/_mishal_bin_shihab_?stkn=OHRzMHc3dmdnbnF4",
        github: null,
        linkedin: "https://www.linkedin.com/in/muhammad-mishal-bin-shihab-1b2405326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "mishalshihab75@gmail.com",
        phone: "9072935977",
    },
    {
        id: "8",
        name: "Anand A B",
        role: "Web Master",
        image: anandImg,
        instagram: "i.4_anand",
        github: "codebyanand10",
        linkedin: "anand",
        email: "anandanil107@gmail.com",
        phone: null,
    },
    {
        id: "9",
        name: "Fathima Roshini Siyad",
        role: "Women In Computing",
        image: roshiniImg,
        instagram: "https://www.instagram.com/roshnii.e_?stkn=MW9zdW5kOW02MXZhNA==",
        github: "https://github.com/FATHIMA-ROSHINI",
        linkedin: "https://www.linkedin.com/in/fathima-roshini-siyad-8477292b3",
        email: "roshni.m.k.s20@gmail.com",
        phone: "8547439733",
    },
    {
        id: "10",
        name: "Renesh Rajesh",
        role: "Project and Technical Coordinator",
        image: reneeshImg,
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

export function getExecomMemberById(id) {
    return execomMembers.find((m) => String(m.id) === String(id));
}
