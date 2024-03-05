import Layout from "@/components/layout/Layout"
import ProjectsDetails from "@/components/sections/inner/ProjectsDetails"
import ProjectsDetailsCadesa from "@/components/sections/inner/ProjectsDetailsCADESA"
import ProjectsDetailsCargill from "@/components/sections/inner/ProjectsDetailsCargill"
import PageTitle from "@/components/sections/PageTitle"
export default function Projectpage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Details projet" />
                <ProjectsDetailsCadesa />
            </Layout>
        </>
    )
}