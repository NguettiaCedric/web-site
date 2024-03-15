import Layout from "@/components/layout/Layout"
import RsmDetails from "@/components/sections/inner/RsmDetails"
import PageTitle from "@/components/sections/PageTitle"
import CTA from "@/components/sections/Ctarsm"
import Link from "next/link"
import CyberSecuriteDetails from "@/components/sections/inner/CyberSecuriteDetails"

export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Cybersécurité" />
                <CyberSecuriteDetails  />
                {/* <CTA  /> */}
                
            </Layout>
        </>
    )
}