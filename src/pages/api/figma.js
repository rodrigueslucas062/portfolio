export default async function handler(req, res) {
  const figmaId = process.env.FIGMA_FILE_ID;
  const figmaToken = process.env.FIGMA_API_KEY;

  console.log("Request received for Figma file:", figmaId);

  try {
    const response = await fetch(`https://api.figma.com/v1/files/${figmaId}`, {
      headers: {
        "X-Figma-Token": figmaToken,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function fetchFigmaData() {
  const response = await fetch("/api/figma");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
