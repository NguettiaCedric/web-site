import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import TeamInnerAbout from "@/components/sections/inner/TeamInnerAbout"
import PageTitle from "@/components/sections/PageTitle"
import Solutions from "@/components/sections/Solutions"
export default function About3() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="A propos" />
                <About1 addClass={"pt-100 pb-50"} />
                {/* <Services1 /> */}
                <Solutions />
                <TeamInnerAbout />
            </Layout>
        </>
    )
}