"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Chatbot() {
    useEffect(() => {
        console.log("🔍 FAQSense Chatbot initializing...");
        console.log("- Data ID:", "3");
        console.log("- Source:", "https://faqsense.netlify.app/embed.js");
    }, []);

    return (
        <>
            {/* The FAQSense Netlify script requires this container to mount the iframe */}
            <div id="faqsense-chatbot"></div>

            <Script
                src="https://faqsense.netlify.app/embed.js"
                strategy="afterInteractive"  //after the site loads
                data-id="4"
                onLoad={() => {
                    console.log("✅ FAQSense Chatbot script loaded successfully from Netlify.");
                }}
                onError={(e) => {
                    console.error("❌ FAQSense Chatbot script failed to load:", e);
                }}
            />
        </>
    );
}
