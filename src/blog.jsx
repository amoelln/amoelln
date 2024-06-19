import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {PageContainer, BackgroundVideo, Titleb, StyledMarkdown } from "./BlogStyle";
import video from "./video.mp4";
import { Card } from "./BlogStyle";
import { CardContainer } from "./AboutMeStyle";
import {Fade} from 'react-awesome-reveal';
import {marked} from 'marked';
import DOMPurify from 'dompurify';
import image from './blog.jpg'




const Blog = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const importAll = (r) => r.keys().map((fileName) => ({
            slug: fileName.substr(2),
            module: r(fileName)
        }));

        const markdownFiles = importAll(require.context('./posts', false, /\.md$/));

        Promise.all(markdownFiles.map(file => 
            fetch(file.module)
                .then(response => response.text())
        ))
        .then(texts => {
            const posts = texts.map((text, index) => ({
                slug: markdownFiles[index].slug,
                content: marked(text), // Wandeln Sie Markdown in HTML um
                image: markdownFiles[index].image
            }));
            setPosts(posts);
        });
    }, []);

    return (
        <PageContainer>
            <BackgroundVideo autoPlay loop muted playsInline src={video} type="video/mp4" />
            <Navbar />
            <Titleb>THE BLOG</Titleb>
            <Fade delay={100}>
            <CardContainer>
            {posts.map((post, index) => {
                const cleanHtmlContent = DOMPurify.sanitize(post.content);
                return (
                    <Card key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' , color: 'black'}}>
                        <div style={{ flex: '1' }}>
                            <div>{post.image}</div>
                            <div dangerouslySetInnerHTML={{__html: cleanHtmlContent}}/>
                        </div>
                    </Card>    
                );
            })}
            </CardContainer>
            </Fade>
        </PageContainer>
    );
}

export default Blog;