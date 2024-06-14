import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {PageContainer, BackgroundVideo, Titleb, StyledMarkdown } from "./BlogStyle";
import video from "./video.mp4";
import { Card } from "./BlogStyle";
import { CardContainer } from "./AboutMeStyle";
import {Fade} from 'react-awesome-reveal';




const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const importAll = (r) => r.keys().map((fileName) => ({
            slug: fileName.substr(2),
            module: r(fileName)
        }));

        const markdownFiles = importAll(require.context('./posts', false, /\.md$/));

        console.log(markdownFiles);

        Promise.all(markdownFiles.map(file => 
            fetch(file.module)
                .then(response => response.text())
        ))
        .then(texts => {
            const posts = texts.map((text, index) => ({
                slug: markdownFiles[index].slug,
                content: text,
                image: markdownFiles[index].image
            }));
            console.log(posts)
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
            {posts.map((post, index) => (
                <Card key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: '1' }}>    
                    </div>
                    <StyledMarkdown>{post.content}</StyledMarkdown>
                </Card>    
            ))}
            </CardContainer>
            </Fade>
        </PageContainer>
    );
}

export default Blog;