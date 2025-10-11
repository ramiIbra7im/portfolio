'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Blog.module.css';

const Blog = () => {
    const blogPosts = [
        {
            image: "/Images/blog1.jpg",
            date: "15 ديسمبر 2024",
            title: "أفضل ممارسات تطوير الويب في 2024",
            excerpt: "تعرف على أحدث التقنيات والممارسات في تطوير الويب التي ستغير طريقة عملك.",
            link: "#"
        },
        {
            image: "/Images/blog2.jpg",
            date: "10 ديسمبر 2024",
            title: "كيف تحسن أداء موقعك باستخدام Next.js",
            excerpt: "نصائح وتقنيات عملية لتحسين سرعة وأداء تطبيقات Next.js الخاصة بك.",
            link: "#"
        },
        {
            image: "/Images/blog3.jpg",
            date: "5 ديسمبر 2024",
            title: "تصميم واجهات المستخدم التي يحبها المستخدمون",
            excerpt: "أسرار تصميم واجهات مستخدم جذابة وسهلة الاستخدام تزيد من تفاعل المستخدمين.",
            link: "#"
        }
    ];

    return (
        <div className={`container-fluid ${styles.blogSection}`} id="blog">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-5 text-white display-4 fw-bold"
                >
                    أحدث المقالات
                </motion.h2>

                <div className="row g-4">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="col-md-6 col-lg-4"
                        >
                            <motion.div
                                className={styles.blogCard}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={400}
                                    height={200}
                                    className={styles.blogImage}
                                />
                                <div className={styles.blogContent}>
                                    <div className={styles.blogDate}>{post.date}</div>
                                    <h3 className={styles.blogTitle}>{post.title}</h3>
                                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                                    <a href={post.link} className={styles.readMore}>
                                        اقرأ المزيد →
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-5"
                >
                    <button className="btn btn-outline-light btn-lg">
                        عرض جميع المقالات
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Blog;