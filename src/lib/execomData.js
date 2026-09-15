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
    },
    {
        id: "2",
        name: "Joveeta Aniyan",
        role: "IEEE Secretary",
        image: joveetaImg,
        instagram: null,
        github: null,
        linkedin: null,
        email: null,
    },
    {
        id: "3",
        name: "Ann P Mathew",
        role: "IEEE Vice Chair",
        image: annImg,
        instagram: "https://www.instagram.com/_ann__rachel_?stkn=MXFnd2phMWlmanllaA==",
        github: "https://github.com/annpmathew21-debug",
        linkedin: "https://www.linkedin.com/in/ann-p-mathew-b97431328",
        email: "annpmathew21@gmail.com",
    },
    {
        id: "4",
        name: "Agnus Varghese",
        role: "IEEE CS Chair",
        image: agnusImg,
        instagram: "https://www.instagram.com/__agnus__varghese__?stkn=OWdrNWQ1d2Nhbnl2",
        github: null,
        linkedin: "https://www.linkedin.com/in/agnus-varghese-9a88a0369",
        email: "agnusvarghese05@gmail.com",
    },
    {
        id: "5",
        name: "Ruben Koshy",
        role: "IEEE CS Secretary",
        image: rubenImg,
        instagram: "https://www.instagram.com/_its_me_ruben_?stkn=MzljaGljdDhsZmk2",
        github: "https://github.com/Ruben-15",
        linkedin: "https://www.linkedin.com/in/ruben-koshy-ba7227280",
        email: "rubenkoshy30@gmail.com",
    },
    {
        id: "6",
        name: "Amitha Jom",
        role: "IEEE Vice Chair",
        image: amithaImg,
        instagram: "https://www.instagram.com/ami_tha_jom?stkn=MWloeG11Y3g0dXNicQ==",
        github: null,
        linkedin: "https://www.linkedin.com/in/amitha-jom-28b645332",
        email: "amithajom3@gmail.com",
    },
    {
        id: "7",
        name: "Mishal Bin Shihab",
        role: "Treasurer",
        image: mishalImg,
        instagram: "https://www.instagram.com/_mishal_bin_shihab_?stkn=OHRzMHc3dmdnbnF4",
        github: null,
        linkedin: "https://www.linkedin.com/in/muhammad-mishal-bin-shihab-1b2405326",
        email: "mishalshihab75@gmail.com",
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
    },
    {
        id: "9",
        name: "Fathima Roshini Siyad",
        role: "WIC",
        image: roshiniImg,
        instagram: "https://www.instagram.com/roshnii.e_?stkn=MW9zdW5kOW02MXZhNA==",
        github: "https://github.com/FATHIMA-ROSHINI",
        linkedin: "https://www.linkedin.com/in/fathima-roshini-siyad-8477292b3",
        email: "roshni.m.k.s20@gmail.com",
    },
    {
        id: "10",
        name: "Reneesh Rajesh",
        role: "Project and Technical Coordinator",
        image: reneeshImg,
        instagram: "https://www.instagram.com/re._.nesh?stkn=MTFzdXRiNWlpZzZieA==",
        github: "https://github.com/renesh-42",
        linkedin: "https://www.linkedin.com/in/renesh-rajesh-b853a8280",
        email: "reneshrajesh487@gmail.com",
    },
];

export function getExecomMembers() {
    return execomMembers;
}

export function getExecomMemberById(id) {
    return execomMembers.find((m) => String(m.id) === String(id));
}
