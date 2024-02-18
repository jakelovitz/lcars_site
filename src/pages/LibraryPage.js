import React, { useEffect, useState } from 'react';

function LibraryPage() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/BookList.html')
      .then(response => response.text())
      .then(html => {
        // Parse the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Example: Remove all <script> tags from the document
        const scripts = doc.getElementsByTagName('script');
        while (scripts.length > 0) {
          scripts[0].parentNode.removeChild(scripts[0]);
        }

        // Example: Filter or manipulate other elements as needed

        // Serialize the document back to an HTML string
        const serializedHTML = doc.documentElement.outerHTML;

        // Set the filtered HTML content into the state
        setHtmlContent(serializedHTML);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default LibraryPage;
