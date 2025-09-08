# 🕵️‍♂️ Steganography and C2 Tool

[![License: AGPL v3](https://img.shields.io/badge/License-AGPLv3-blue.svg)](LICENSE)
[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/)
![Platform](https://img.shields.io/badge/platform-linux%20%7C%20windows-lightgrey)
![Status](https://img.shields.io/badge/type-open--source--tool-success)

> ⚠️ **Legal Disclaimer**  
> This is a **research and development tool** that demonstrates steganography and Command and Control (C2) communication techniques in a **controlled environment**.  
> Its use is strictly intended for learning, testing, and research purposes.  
> **Unauthorized or illegal use is prohibited** under applicable laws, including the [Brazilian Civil Rights Framework for the Internet (Law No. 12,965/2014)](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm).  
> The author assumes **no liability** for misuse or damages.

---

## 📌 Table of Contents

- [🎯 Objective](#-objective)
- [🧰 Technologies](#-technologies)
- [🏗️ Architecture](#️-architecture)
- [⚙️ Usage Instructions](#️-usage-instructions)
- [⚠️ Limitations](#️-limitations)
- [📷 Screenshot](#-screenshot)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 🎯 Objective

This project provides a **functional tool** for:

- **Steganography** using LSB (Least Significant Bit) to embed messages in images.
- **Simulated C2 communication**, allowing structured data flow between a local client and server.

## 🧰 Technologies

- **Language:** Python 3.8+
- **Libraries:**
  - [`Pillow`](https://pypi.org/project/Pillow/) – Image manipulation
  - `socket` – Local TCP communication
- **Execution environment:** Fully local (`127.0.0.1`) for safety
- **Web interface (in development):** Started on 09/06/2025

  [![My Skills](https://skillicons.dev/icons?i=py,bash,ts,js,vite,react,nodejs,npm,tailwind)](https://skillicons.dev)

---

## 🏗️ Architecture

The architecture is modular and extensible:

- **🎯 Client Module**:  
  Sends steganographic payloads to the C2 server.

- **🖥️ Server Module (C2)**:  
  Receives and decodes payloads, simulating command reception.

- **🗝️ Encoding/Decoding Layer**:  
  Handles the core steganographic logic (LSB).

- **🛡️ Safety & Logging Layer**:  
  Logs key events and blocks unsafe usage.

## ⚙️ Usage Instructions

### Step 1: Fork the repository on GitHub
You need to fork the project repository to your own GitHub account to use the steganography panel.

### Step 3: Activate the Python virtual environment
Create and activate the virtual environment (venv):
```bash
python -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`
```
### Step 4: Install dependencies
```bash
pip install -r requirements.txt
```
### Step 5: Run the backend server locally
```bash
uvicorn api.main:app --reload
```
### Step 6: Use the Steganography Panel

<img width="1909" height="935" alt="image" src="https://github.com/user-attachments/assets/dcca7d7d-c3bf-46d1-b058-16120e2958e7" />


## ⚠️ Limitations

- 📏 Message size is limited by the resolution of the input image.

- 🔓 No encryption is used; the message can be detected with forensic techniques.

- 🎭 The C2 feature is entirely simulated and does not perform real-world operations.

- ⚙️ To use the steganography panel, you need to activate the virtual environment (venv) in the repository and run the backend API server locally before interacting with the site.


## 📷 Screenshot

### Diagram

<img width="1393" height="747" alt="image" src="https://github.com/user-attachments/assets/5f536754-8680-4659-944d-feb1ec3c2d18" />

### WebSite

<img width="1909" height="940" alt="image" src="https://github.com/user-attachments/assets/e12bb8ac-55b4-46df-ae48-9d40582184d4" />
<img width="1909" height="940" alt="image" src="https://github.com/user-attachments/assets/020acfb3-ec0b-4060-adc1-43aaa018f976" />
<img width="1909" height="940" alt="image" src="https://github.com/user-attachments/assets/f17111ad-7082-4e11-9196-e1bd4e3c07cb" />

## 🤝 Contribution Guidelines

Contributions are welcome, provided they align with the educational goals of the project.  
If you find bugs, have ideas for improvements, or want to add features, feel free to contribute via pull requests.

To contribute:

1. Fork the repository.  
2. Create a branch with your changes.  
3. Submit a pull request with a detailed description of your changes.

## 📄 License
This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).  
See the [LICENSE](./LICENSE) file for details.


## 📬 Contact
- Contact the author via [GitHub](https://github.com/Vyzer9)

<img width="351" height="383" alt="image" src="https://github.com/user-attachments/assets/1c883c12-9f16-4064-a752-40ed4edee172" />




>⚠️ Final Notice:
>This project is intended for research, testing, and development purposes in controlled environments only.
>Do not use this code in production systems, unauthorized networks, or for malicious activities.
>The author explicitly disclaims any responsibility for misuse and condemns any form of unethical or illegal usage.
