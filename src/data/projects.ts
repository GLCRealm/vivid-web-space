
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  fullDescription?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "IDS-Anomaly-Detection-with-NSL-KDD",
    description: "Developed an Intrusion Detection System using an Isolation Forest-based anomaly detection model to identify unauthorized network activities. Utilized the NSL-KDD dataset to train and evaluate the system, achieving improved threat detection accuracy.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    technologies: ["Network Security", "Machine Learning", "Python", "Scikit-learn", "Anomaly Detection", "Identity-Based Security"],
    fullDescription: "Designed and implemented an Intrusion Detection System (IDS) from April to May 2024 using machine learning techniques to enhance network security. The system employed the Isolation Forest algorithm—an unsupervised anomaly detection method—to detect unusual patterns in network traffic and classify them as potential threats. Training and evaluation were conducted on the NSL-KDD dataset, a widely used benchmark for intrusion detection research. The model successfully identified and flagged unauthorized access attempts and suspicious behavior, improving the overall accuracy of threat identification. Key technologies used in this project included Python, Scikit-learn, and identity-based anomaly detection frameworks."
  },
  {
    id: 2,
    title: "BigInteger-Library",
    description: "Developed a custom BigInteger library in C++ to handle arbitrarily large integer arithmetic, supporting core operations like addition, subtraction, multiplication, division, and modular arithmetic.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    technologies: ["C++", "Data Structures", "Operator Overloading", "Arbitrary-Precision Arithmetic", "Object-Oriented Programming"],
    fullDescription: "Created a BigInteger library in C++ designed to perform arithmetic operations on integers beyond the range of built-in data types. The library supports fundamental operations such as addition, subtraction, multiplication, division, and modulo, enabling precision computations with very large numbers. Internally, it uses string-based or vector-based representations to handle digit-level operations, ensuring scalability and accuracy. This project strengthens understanding of number theory, operator overloading, and object-oriented programming in C++, and is useful for cryptographic applications, numerical simulations, and systems requiring high-precision calculations."
  },
  {
    id: 3,
    title: "NLP-Powered-LLaMA-3-Enabled-PDF-Parser",
    description: "Built an advanced PDF parser integrated with LLaMA 3 to extract, analyze, and interpret textual data using natural language processing techniques. Enabled intelligent querying and summarization of PDF content.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    technologies: ["Natural Language Processing", "Large Language Models (LLaMA 3)", "Python", "PDF Text Extraction", "OCR", "Prompt Engineering", "Document Parsing", "LangChain/LLM Integration"],
    fullDescription: "Developed a powerful NLP-based PDF parser that leverages Meta's LLaMA 3 model to perform intelligent text extraction, summarization, and semantic understanding of PDF documents. The system preprocesses PDFs using OCR and text extraction techniques, then feeds the content into LLaMA 3 to enable natural language querying, contextual comprehension, and summarization. Designed for applications where understanding and interacting with complex documents (e.g., research papers, reports) is essential. This project showcases capabilities in NLP, LLM integration, prompt engineering, and pipeline design for document intelligence."
  },
  {
    id: 4,
    title: "Optical-Character-Recognitiond",
    description: "Built an OCR system in Python using Tesseract and OpenCV to extract text from images with high accuracy, supporting image preprocessing, noise removal, and real-time text recognition.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Image Preprocessing","Text Extraction", "Automation", "Computer Vision"],
    fullDescription: "Developed a robust Optical Character Recognition (OCR) system that accurately extracts text from images using Tesseract OCR and OpenCV. The project features image preprocessing techniques such as grayscale conversion, thresholding, noise reduction, and contour detection to enhance text recognition accuracy. Designed to handle scanned documents, handwritten notes, and printed images, the system automates text extraction tasks and supports integration with downstream NLP or document analysis pipelines. This project demonstrates practical skills in image processing, OCR engines, and Python-based automation."
  } 
];