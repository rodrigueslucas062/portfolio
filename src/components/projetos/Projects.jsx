import { fetchFigmaData } from "@/pages/api/figma";
import { useEffect, useState } from "react";

export default function AllProjects() {
    const [frameUrl, setFrameUrl] = useState('');

    useEffect(() => {
        const loadFigmaData = async () => {
            try {
                const data = await fetchFigmaData();
                const frameId = 'YOUR_FRAME_ID';
                const frame = data.document.children[0].children.find(child => child.id === frameId);

                if (frame) {
                    const figmaFileId = process.env.NEXT_PUBLIC_FIGMA_FILE_ID;
                    const frameUrl = `https://www.figma.com/file/${figmaFileId}/${frame.name}?node-id=${frame.id}`;
                    setFrameUrl(`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(frameUrl)}`);
                } else {
                    console.error('Frame not found');
                }
            } catch (error) {
                console.error('Error fetching Figma data:', error);
            }
        };

        loadFigmaData();
    }, []);

    return (
        <div>
            <h1>Figma File Viewer</h1>
            {frameUrl ? <iframe src={frameUrl} width="800" height="600" style={{ border: 'none' }}></iframe> : <p>Loading...</p>}
        </div>
    );
}