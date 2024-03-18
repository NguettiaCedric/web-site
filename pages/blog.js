import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Blog() {
    const [posts, setPosts] = useState([]);

    /* useEffect(()=> {
        const getCategories = async () =>{
            try{
                const response = await axios.get('https://blog.croissancenumerique.ci/wp-json/wp/v2/categories');
                setCategories(response.data)
            }catch (error) {
                console.error('Erreur lors de la récupération des catégories :', error);
            }
        };

        getCategories();
    }, []); */

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.get('https://blog.croissancenumerique.ci/wp-json/wp/v2/posts');
            setPosts(response.data);
          } catch (error) {
            console.error('Erreur lors de la récupération des articles :', error);
          }
        };
    
        fetchPosts();
      }, []);

      const formattedDate = new Date(posts.date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="BLOG" />
                {/* <section className='container py-5'>
                    <ul className='row'>
                        {posts.map(post => (
                        <li key={post.id} className='col-md-4 mx-1 shadow-sm py-3 bg-body rounded'>
                            <div className=''>
                                <div>
                                <img src={post.featured_media} alt="image mise en avant" />
                                </div>
                                <div>
                                    <h2>{post.title.rendered}</h2>
                                    <div style={{textAlign:'justify'}} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                    <a className='btn btn-primary' href={post.link}>Lire la suite</a>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </section> */}
                <section className="news-section">
                    <ul  className="auto-container row">
                        {/* News Block */}
                    {posts.map(post => (
                        <li key={post.id} className="news-block col-md-4 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details"><img src="/images/resource/news-1.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user-circle" /> publié par Admin</li>
                                    </ul>
                                    <h4 className="title"><Link href={post.link}>{post.title.rendered}</Link></h4>
                                    <div style={{textAlign:'justify'}} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                    <Link href={post.link} className="read-more">Lire la suite <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </section>
            </Layout>
        </>
    )
}

