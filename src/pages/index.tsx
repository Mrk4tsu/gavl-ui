import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ComponentCard {
    icon: string;
    name: string;
    desc: string;
    tag: string;
}

interface FeatureItem {
    icon: string;
    title: string;
    desc: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const COMPONENTS: ComponentCard[] = [
    { icon: '🎮', name: 'Button', desc: 'Pixel-style buttons với nhiều variant: gold, danger, ghost, purple...', tag: 'gv-btn' },
    { icon: '📦', name: 'Card', desc: 'Card có header, body, footer với pixel shadow đặc trưng.', tag: 'gv-card' },
    { icon: '🏷️', name: 'Badge & Tag', desc: 'Badge màu sắc phong phú, tag dạng pill linh hoạt.', tag: 'gv-badge' },
    { icon: '⚠️', name: 'Alert', desc: 'Thông báo success, danger, warning, info với icon.', tag: 'gv-alert' },
    { icon: '📊', name: 'Progress', desc: 'Progress bar tĩnh và animated stripe sinh động.', tag: 'gv-progress' },
    { icon: '📝', name: 'Form', desc: 'Input, select, checkbox, toggle với pixel border.', tag: 'gv-input' },
    { icon: '💬', name: 'Modal', desc: 'Dialog overlay với pixel shadow nổi bật, có backdrop.', tag: 'gv-modal' },
    { icon: '🔔', name: 'Toast', desc: 'Notification snackbar góc màn hình với animation.', tag: 'gv-toast' },
    { icon: '🗂️', name: 'Tabs', desc: 'Tab navigation với active state và pixel underline.', tag: 'gv-tabs' },
    { icon: '📋', name: 'Table', desc: 'Bảng dữ liệu với striped rows và hover state.', tag: 'gv-table' },
    { icon: '🔖', name: 'Breadcrumb', desc: 'Navigation breadcrumb với separator tùy chỉnh.', tag: 'gv-breadcrumb' },
    { icon: '📄', name: 'Pagination', desc: 'Phân trang với pixel shadow và active state.', tag: 'gv-page-item' },
];

const FEATURES: FeatureItem[] = [
    { icon: '⚡', title: 'Zero Dependencies', desc: 'Chỉ cần import một file CSS. Không cần JS framework.' },
    { icon: '🇻🇳', title: 'Tiếng Việt Ready', desc: 'Hỗ trợ đầy đủ dấu thanh với Be Vietnam Pro font.' },
    { icon: '🌙', title: 'Dark Mode', desc: 'Dark mode qua class .gv-dark, dễ toggle.' },
    { icon: '🎨', title: 'Design Tokens', desc: 'CSS variables có hệ thống, dễ customize toàn bộ theme.' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroPixelGrid(): React.ReactElement {
    return (
        <div className={styles.pixelGrid} aria-hidden="true">
            {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className={styles.pixelDot} style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
        </div>
    );
}

function ComponentCardItem({ card }: { card: ComponentCard }): React.ReactElement {
    return (
        <div className={styles.card}>
            <span className={styles.cardIcon}>{card.icon}</span>
            <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{card.name}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
            </div>
            <code className={styles.cardTag}>.{card.tag}</code>
        </div>
    );
}

function FeatureItem({ item }: { item: FeatureItem }): React.ReactElement {
    return (
        <div className={styles.featureItem}>
            <span className={styles.featureIcon}>{item.icon}</span>
            <h3 className={styles.featureTitle}>{item.title}</h3>
            <p className={styles.featureDesc}>{item.desc}</p>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home(): React.ReactElement {
    const heroRef = useRef<HTMLDivElement>(null);

    // Subtle parallax on hero pixel grid
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const y = window.scrollY;
                heroRef.current.style.setProperty('--scroll-y', `${y * 0.3}px`);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout
            title="GAVL UI — Pixel RPG CSS Library"
            description="Thư viện UI theo phong cách Pixel RPG dành cho GAVL.IO.VN. Hỗ trợ tiếng Việt, Dark Mode, Zero Dependencies."
        >
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className={styles.hero} ref={heroRef}>
                <HeroPixelGrid />
                <div className={styles.heroInner}>
                    <p className={styles.heroEyebrow}>⚔ PIXEL RPG CSS LIBRARY ⚔</p>
                    <h1 className={styles.heroTitle}>GAVL UI</h1>
                    <p className={styles.heroVersion}>v1.1</p>
                    <p className={styles.heroSub}>
                        Thư viện UI theo phong cách Pixel RPG — dành riêng cho{' '}
                        <strong>GAVL.IO.VN</strong>
                        <br />
                        Hỗ trợ đầy đủ tiếng Việt · Dark Mode · Zero Dependencies
                    </p>

                    <div className={styles.heroBadges}>
                        <span className={styles.heroBadge}>Pixel Art Style</span>
                        <span className={styles.heroBadge}>Vietnamese Ready</span>
                        <span className={styles.heroBadge}>Dark Mode</span>
                        <span className={styles.heroBadge}>20+ Components</span>
                    </div>

                    <div className={styles.heroActions}>
                        <Link className={styles.btnPrimary} to="/docs/getting-started/installation">
                            ▶ &nbsp;Bắt đầu ngay
                        </Link>
                        <Link className={styles.btnOutline} to="/docs/components/button">
                             &nbsp;Xem Components
                        </Link>
                        <a
                            className={styles.btnGhost}
                            href="https://github.com/gavl-io/gavl-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ⭐ &nbsp;GitHub
                        </a>
                    </div>
                </div>

                {/* Decorative bottom wave */}
                <div className={styles.heroWave} aria-hidden="true" />
            </section>

            {/* ── FEATURES ─────────────────────────────────────────── */}
            <section className={styles.featuresSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.featureGrid}>
                        {FEATURES.map((f) => (
                            <FeatureItem key={f.title} item={f} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMPONENTS ───────────────────────────────────────── */}
            <section className={styles.componentsSection}>
                <div className={styles.sectionInner}>
                    <p className={styles.sectionLabel}>COMPONENTS</p>
                    <h2 className={styles.sectionTitle}>Tất cả những gì bạn cần</h2>
                    <p className={styles.sectionSub}>
                        Hơn 20 component pixel-styled, sẵn sàng copy & paste vào dự án của bạn.
                    </p>
                    <div className={styles.componentGrid}>
                        {COMPONENTS.map((c) => (
                            <ComponentCardItem key={c.name} card={c} />
                        ))}
                    </div>
                    <div className={styles.sectionCta}>
                        <Link className={styles.btnPrimaryLg} to="/docs/category/components">
                            Xem toàn bộ tài liệu →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── INSTALL ──────────────────────────────────────────── */}
            <section className={styles.installSection}>
                <div className={styles.sectionInner}>
                    <p className={styles.sectionLabelLight}>INSTALL</p>
                    <h2 className={styles.sectionTitleLight}>Cài đặt trong 30 giây</h2>

                    <div className={styles.installSteps}>
                        {/* Step 1 */}
                        <div className={styles.installStep}>
                            <span className={styles.stepNum}>01</span>
                            <p className={styles.stepLabel}>Cài package</p>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeLine}>
                                    <span className={styles.codePrompt}>$</span>
                                    <span> npm install gavl-ui</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={styles.installStep}>
                            <span className={styles.stepNum}>02</span>
                            <p className={styles.stepLabel}>Import CSS</p>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeKeyword}>import </span>
                                    <span className={styles.codeString}>'gavl-ui/dist/gavl-ui.css'</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={styles.installStep}>
                            <span className={styles.stepNum}>03</span>
                            <p className={styles.stepLabel}>Dùng ngay</p>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeTag}>&lt;button </span>
                                    <span className={styles.codeAttr}>class</span>
                                    <span>=</span>
                                    <span className={styles.codeString}>"gv-btn gv-btn-primary"</span>
                                    <span className={styles.codeTag}>&gt;</span>
                                </div>
                                <div className={styles.codeLine} style={{ paddingLeft: 16 }}>
                                    Play Now
                                </div>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeTag}>&lt;/button&gt;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview button row — styled via module CSS */}
                    <div className={styles.previewRow}>
                        <button className={styles.previewBtnPixel}>PLAY NOW</button>
                        <button className={styles.previewBtnDanger}>⚔ Attack</button>
                        <button className={styles.previewBtnSuccess}>✓ Confirm</button>
                        <button className={styles.previewBtnPurple}>✨ Magic</button>
                        <button className={styles.previewBtnGhost}>Cancel</button>
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaInner}>
                    <p className={styles.ctaPixel}>[ PRESS START ]</p>
                    <h2 className={styles.ctaTitle}>Sẵn sàng build giao diện pixel?</h2>
                    <p className={styles.ctaSub}>
                        Đọc tài liệu và bắt đầu dùng GAVL UI trong dự án của bạn ngay hôm nay.
                    </p>
                    <Link className={styles.ctaBtn} to="/docs/category/getting-started">
                        ▶ &nbsp;Bắt đầu ngay
                    </Link>
                </div>
            </section>
        </Layout>
    );
}