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
- [🌐 Website](#-website)
- [🧰 Technologies](#-technologies)
- [🏗️ Architecture](#️-architecture)
- [⚙️ Usage Instructions](#️-usage-instructions)
- [⚠️ Limitations](#️-limitations)
- [📜 Tutorial](#-tutorial)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📷 Screenshot](#-general-screenshot)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 🎯 Objective

This project provides a **functional tool** for:

- **Steganography** using LSB (Least Significant Bit) to embed messages in images.
- **Simulated C2 communication**, allowing structured data flow between a local client and server.

## 🌐 Website

Visit the live project at:  
🔗 [https://peer-crypt.vercel.app](https://c2-steganography-phi.vercel.app/)

## 🧰 Technologies

- **Language:** Python 3.8+
- **Libraries:**
  - [`Pillow`](https://pypi.org/project/Pillow/) – Image manipulation
  - `socket` – Local TCP communication
- **Execution environment:** Fully local (`127.0.0.1`) for safety
- **Web interface (in development):** Started on 09/06/2025

  [![My Skills](https://skillicons.dev/icons?i=py,bash,ts,js,vite,react,nodejs,npm,tailwind,docker,vercel)](https://skillicons.dev)

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

### Step 2: Activate the Python virtual environment
Create and activate the virtual environment (venv):
```bash
python -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`
```
### Step 3: Install dependencies
```bash
pip install -r requirements.txt
```
### Step 4: Run the backend server locally
```bash
uvicorn api.main:app --reload
```
### Step 5: Use the Steganography Panel in the WebSite

<img width="1909" height="935" alt="image" src="https://github.com/user-attachments/assets/dcca7d7d-c3bf-46d1-b058-16120e2958e7" />


## ⚠️ Limitations

- 📏 The message size is limited by the input image resolution.

- 🎭 The C2 feature is fully simulated and does not perform real-world operations.

- ⚙️ To use the steganography dashboard, you need to activate the virtual environment (venv) in the repository and run the backend API server locally before interacting with the website.

---
  
## 📜 Tutorial
I will be showing here a tutorial on how to use the tool efficiently, remembering that at the moment 09/08/2025 the tool runs on the website but with its API connected manually, which in itself is already a great advance compared to the beta version 0.1.0 which did not even have the website.

### 1 Step.  Fork
First we will Fork the repository to clone it and run some processes.

<img width="1584" height="750" alt="image" src="https://github.com/user-attachments/assets/93c94574-1c13-4c22-8647-0ff4197bcede" />

### 2 Step. Folders and Files (Important) ⚠️
When you enter the project, you'll see a certain folder structure. Currently, the site still doesn't run without this user dependency on using the tool without manually starting the API. So, you'll just enter the terminal instead of using any of the folders.

<img width="362" height="548" alt="image" src="https://github.com/user-attachments/assets/f92ff01a-0637-4233-a2db-5f35682cea7a" />

### 3 Step. Terminal
Entering the terminal, we will start VENV:
```bash
python -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`
```

After that we will add the packages that are in the tool's requirement using the command:
```bash
pip install -r requirements.txt
```

Finally, we will activate the API with the command:
```bash
uvicorn api.main:app --reload
```

<img width="1580" height="448" alt="image" src="https://github.com/user-attachments/assets/e377e194-cbca-4186-a409-5a4574b22f75" />


We will see the Link and when we click we will see the API online. Remembering that it is not mandatory to enter the link to see the API status, but for good practice it is good to see it to have confirmation.

<img width="347" height="155" alt="image" src="https://github.com/user-attachments/assets/1dd5d40c-aad2-486e-8f07-b99a03d4ba59" />


### Step 4. WebSite 
Finally, you will enter the website that is available in the repository (Without closing your IDE and your API page) and scrolling down you will reach the panel where we have the options to inject information and extract information.
First, let's start with the process of injecting information into the image. I'll use one as an example and inform you of the content.

<img width="1468" height="769" alt="image" src="https://github.com/user-attachments/assets/731df248-582f-4422-975d-6116445de82d" />

see that we automatically receive a file with a name, when clicking it we will see that the photo is the same, it seems funny but after all the information is hidden in it. Now let's do the opposite process

<img width="1468" height="769" alt="image" src="https://github.com/user-attachments/assets/49fcaddc-4680-4800-a276-176570f89d39" />

Congratulations, you did the steganography process correctly. 🎊🎉🎉🎉🎉

## 🤝 Contribution Guidelines

Contributions are welcome, provided they align with the educational goals of the project.  
If you find bugs, have ideas for improvements, or want to add features, feel free to contribute via pull requests.

To contribute:

1. Fork the repository.  
2. Create a branch with your changes.  
3. Submit a pull request with a detailed description of your changes.

## 📷 General Screenshot

### Diagram

<img width="1393" height="747" alt="image" src="https://github.com/user-attachments/assets/5f536754-8680-4659-944d-feb1ec3c2d18" />

### WebSite

<img width="1909" height="940" alt="image" src="https://github.com/user-attachments/assets/e12bb8ac-55b4-46df-ae48-9d40582184d4" />
<img width="1909" height="940" alt="image" src="https://github.com/user-attachments/assets/020acfb3-ec0b-4060-adc1-43aaa018f976" />
<img width="1909" height="940" alt="image" src="https://github.com/user-attachments/assets/f17111ad-7082-4e11-9196-e1bd4e3c07cb" />

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
