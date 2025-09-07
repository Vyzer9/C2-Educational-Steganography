# 🕵️‍♂️ Steganography and C2 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/)
![Platform](https://img.shields.io/badge/platform-linux%20%7C%20windows-lightgrey)
![Status](https://img.shields.io/badge/status-educational-important)

> ⚠️ **Legal Disclaimer**  
> This project is strictly for educational purposes, demonstrating steganography and simulated Command and Control (C2) communication in a **controlled local environment**.  
> **Unauthorized use is strictly prohibited** under Brazilian law, including the [Brazilian Civil Rights Framework for the Internet (Law No. 12,965/2014)](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm).  
> The author assumes **no liability** for any misuse or illegal activity.

---

## 📌 Table of Contents

- [🎯 Project Objective](#-project-objective)
- [🧰 Technologies](#-technologies)
- [🏗️ Architecture](#️-architecture)
- [⚙️ Usage Instructions](#️-usage-instructions)
- [🖧 Simulated C2 Communication](#-simulated-c2-communication-localhost-only)
- [🔒 Built-in Safety Measures](#-built-in-safety-measures)
- [⚠️ Limitations](#️-limitations)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 🎯 Project Objective

This project demonstrates two cybersecurity-related technical concepts:

- **Steganography** using LSB (Least Significant Bit) to hide messages in images.
- **Simulated C2 (Command & Control)** communication between client and server in a sandboxed environment.

---

## 🧰 Technologies

- **Language:** Python 3.8+
- **Libraries:**
  - [`Pillow`](https://pypi.org/project/Pillow/) – Image manipulation
  - `socket` – For local TCP communication
- **Environment:** Designed for local use (`127.0.0.1`) to ensure isolation and safety.

---

## 🏗️ Architecture

The project adopts a modular architecture, ensuring that each component has a clear and isolated responsibility:

- **🎯 Client Module**:  
  Handles the sending of messages and data to the server, embedding commands or information using steganographic techniques.
  
- **🖥️ Server (C2) Module**:  
  Acts as the Command-and-Control endpoint, receiving, decoding, and processing data sent by clients.
  
- **🗝️ Encoding/Decoding Layer**:  
  Provides the core steganography logic, including the encoding of messages into images/files and their decoding on the server side.
  
- **🛡️ Safety & Logging Layer**:  
  Contains security mechanisms, validation, and logging to ensure the system is safe for educational purposes and prevent misuse.


## ⚙️ Usage Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/Vyzer9/C2-Educational-Steganography.git
cd Educational-C2-Steganography
```
### 2. Install dependencies
```bash
pip install pillow
```
### 3. Steganography: Encode/Decode messages
To encode a message into an image:
```bash
python src/stego_c2.py encode input.png "Test message" output.png
```
To decode a message from an image:
```bash
python src/stego_c2.py decode output.png
```
(Optional) See help:
```bash
python src/stego_c2.py --help
```

## 🖧 Simulated C2 Communication (Localhost Only)
### 1. Start the server:
```bash
python src/stego_c2.py server
```
### 2. Start the client using the encoded image:
```bash
python src/stego_c2.py client output.png
```
>⚠️ Important:
>The client-server communication is restricted to 127.0.0.1:9999 and should never be modified to run over the public internet. This is a local simulation only.

## 🔒 Built-in Safety Measures

To prevent accidental misuse, the code includes protective logic:
```python
if server_ip != "127.0.0.1":
    print("C2 server is restricted to local testing only.")
    exit(1)
```
And a legal and ethical disclaimer inside the source file:
```python
"""
Educational Project - Steganography and C2 Communication
This script is for educational and testing purposes only.
Unauthorized or illegal use of this code is strictly prohibited.
"""
```

## ⚠️ Limitations

- 📏Message size is limited by the resolution of the input image.

- 🔓No encryption is used; the message can be detected with forensic techniques.

- 🎭The C2 feature is entirely simulated and does not perform real-world operations.

## 📷 Screenshot

<img width="1442" height="776" alt="image" src="https://github.com/user-attachments/assets/9c667fea-dcd2-46fe-b00e-045d3fb56c6b" />

## 🤝 Contribution Guidelines

Contributions are welcome, provided they align with the educational goals of the project.
To contribute:
1. Fork the repository.

2. Create a branch with your changes.
 
3. Submit a pull request with a detailed description.

## 📄 License
This project is licensed under the MIT License.

## 📬 Contact
- Contact the author via [GitHub](https://github.com/Vyzer9)

  <img width="361" height="407" alt="image" src="https://github.com/user-attachments/assets/bf218267-dc2d-4151-8458-dad065f2d586" />



>⚠️ Final Notice:
>This project is intended for controlled, educational use only.
>Do not use this code in real systems or unauthorized environments. The author condemns any form of misuse or abuse.
