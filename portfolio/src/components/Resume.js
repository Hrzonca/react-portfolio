import React from "react";

function Resume() {
    return (
        <div className="resume">
            <h1 className="title">Resume</h1>
            <p className="intro">
                Highly motivated learner with a Bachelors in Biomedical sciences along with a certificate of completion for a full stack Javascript program, all through the University of Washington. I have spent 20 years in school and still can not get enough. I have found a passion for the compexity of computer science and want to explore it more. I decided to undertake a new field of study hoping my love for learning languages would translate over and it has paid off so far. I am excited to get into this field and learn as much as I can.
            </p>
            <section className="education">
                <li>Certificate of Completion Full Stack JavaScript </li>
                <p>August 2022- February 2023</p>

                <li>Bachelor of Science in Biomedical Science</li>
                <p>September 2019 -June 2022</p>
            </section>
        </div>

    )
}

export default Resume;