import { fetchFigmaData } from "@/pages/api/figma";
import { useEffect, useState } from "react";

export default function AllProjects() {
    const [fileUrl, setFileUrl] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFigmaData = async () => {
            try {
                const data = await fetchFigmaData();
                const figmaFileId = process.env.NEXT_PUBLIC_FIGMA_FILE_ID;
                const fileUrl = `https://www.figma.com/file/${figmaFileId}`;
                setFileUrl(`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(fileUrl)}`);
            } catch (error) {
                console.error('Error fetching Figma data:', error);
                setError(error.message);
            }
        };

        loadFigmaData();
    }, []);

    return (
        <div>
            <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FWVxv3zCVC91AkKkKsrSwmx%2FExpo-Una-prototype%3Fnode-id%3D0-1%26t%3DOKUDIt7KnEwDwq6u-1" allowfullscreen></iframe>
        </div>

    );
}