import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import DemandeDemo from "@/components/sections/inner/DemandeDemo"
// import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
export default function pagecontact() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Demande Demo" />
                {/* <Contact /> */}
                <DemandeDemo />
                <Map />
            </Layout>
        </>
    )
}