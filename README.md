
---
FIRST CHECKOUT THE VIDEO OF HOW OUR CHATBOT EXACTLY WORKS AND THEN FURTHER CHECKOUT THE README FILE FOR BETTER UNDERSTANDING 


<video controls src="20241027-0148-23.2433515.mp4" title="Title"></video>

## Drive link to Demonstration of NomosBot

https://drive.google.com/file/d/1tZ-UjY9qsI-w_Xk3Rucz91K6PcJuPNR3/view
# Nomos - AI Law Chatbot



**Nomos** is an AI-powered legal chatbot designed to assist users with inquiries on Indian law. Trained on a dataset of 45,000 legal queries specific to Indian legal systems, Nomos provides accurate and insightful responses by leveraging advanced AI techniques, including agents, chain-of-thought reasoning, and Retrieval-Augmented Generation (RAG), using the Gemini API.


## DeployedLink

https://nomosbot.netlify.app

## Features

- **Expert Legal Assistance**: Trained specifically on Indian law, covering topics from civil to criminal law.
- **Agent-Based Reasoning**: Uses multiple agents to deliver a nuanced understanding of legal questions.
- **Chain-of-Thought Processing**: Breaks down complex queries into manageable steps to enhance answer quality.
- **Retrieval-Augmented Generation (RAG)**: Improves response accuracy by combining real-time information retrieval with response generation.
- **Powered by Gemini API**: Integrates Gemini's latest API capabilities for high-performance processing and data handling.
- **Strictly answers law based Querys**: It answers only law based queries and does not give the output if its not somehitng law related.
- ![Screenshot 2024-10-27 100126](https://github.com/user-attachments/assets/0dd86bf0-42b3-4e09-9d67-a2ae6ba26987)

## Frontend

The frontend of Nomos is built with:
- **React** for dynamic user interface components.
- **Tailwind CSS** for fast and responsive UI styling.

## Future Collaboration

We are preparing to collaborate with government bodies to access more detailed and comprehensive legal datasets. This partnership will allow Nomos to provide even more accurate and precise responses, benefiting both users and the legal system as a whole.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/Nomos.git
   cd Nomos
   ```

2. **Install Backend Dependencies:**
   Ensure you have Python 3.8+ installed. Install required packages with:
   ```bash
   pip install -r requirements.txt
   ```

3. **Install Frontend Dependencies:**
   In the `frontend` directory:
   ```bash
   cd frontend
   npm install
   ```

4. **Set Up Gemini API Access**:
   - Get your API key from Gemini.
   - Set up your environment by creating a `.env` file with:
     ```
     GEMINI_API_KEY=your_gemini_api_key
     ```

## Usage
   ```

1. **Run the Frontend**:
   In the `frontend` directory, start the React app:
   ```bash
   npm start
   ```

2. **Interacting with Nomos**:
   Access the chatbot at `http://localhost:3000` and start interacting with legal queries. For example:

   ```plaintext
   User: What are the laws on property inheritance in India?
   Nomos: Indian inheritance law is governed by a variety of statutes, depending on religion, region, and type of property...
   ```

## Training
 ![alt text](ONE.JPEG)
 ![alt text](2.JPEG)
 ![alt text](3.JPEG)
Nomos was trained using:
- **45,000 Indian law queries** covering areas such as civil, criminal, property, and corporate law.
- A custom model architecture that improves legal comprehension by utilizing a chain-of-thought approach and RAG for enhancing information retrieval.

For re-training or fine-tuning, check out our `training/README.md` for detailed instructions.

## PPT

https://docs.google.com/presentation/d/1d-mF3thxNbclZhfZ4unQAMH694v1yD3a/edit?usp=drive_web&ouid=110808746669281974824&rtpof=true



