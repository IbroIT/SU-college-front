import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

const DocumentViewer = ({ pdfFiles }) => {
    const { documentId } = useParams();
    const [numPages, setNumPages] = useState(0);
    const selectedFile = pdfFiles.find((file, index) => index.toString() === documentId);

    const viewerRef = useRef(null);

    useEffect(() => {
        if (!selectedFile) return;

        const renderPDF = async () => {
            const loadingTask = pdfjsLib.getDocument(selectedFile.url);
            const pdf = await loadingTask.promise;
            setNumPages(pdf.numPages);

            const viewer = viewerRef.current;
            viewer.innerHTML = ''; // Очищаем контейнер перед рендерингом

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 1.5 });

                // Создаем canvas для каждой страницы
                const canvas = document.createElement('canvas');
                canvas.style.marginBottom = '20px'; // Отступ между страницами
                const context = canvas.getContext('2d');

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport,
                };

                await page.render(renderContext).promise;
                viewer.appendChild(canvas);
            }
        };

        renderPDF();
    }, [selectedFile]);

    if (!selectedFile) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Документ не найден</div>;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                boxSizing: 'border-box',
                overflowY: 'auto',
                height: 'calc(100vh - 120px)', // Учитываем высоту header и footer
            }}
        >
            <div
                ref={viewerRef}
                style={{
                    maxWidth: '800px',
                    width: '100%',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            />
        </div>
    );
};

export default DocumentViewer;
