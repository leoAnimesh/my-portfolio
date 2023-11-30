import Link from "next/link";

const ProjectDetails = () => {
    return (
        <div>
            <Link href={"/projects"} >back</Link>
            <h1>Project Details</h1>
        </div>
    );
}

export default ProjectDetails;