export default [
    {
        id: "cn-1",
        question: "A network engineer observes that a device can ping its own IP but cannot reach any other device on the same subnet. Which OSI layer is most likely the cause?",
        options: [
            "Physical Layer",
            "Data Link Layer",
            "Network Layer",
            "Transport Layer"
        ],
        answer: 1,
        explanation: "Pinging the own IP succeeds at the Network layer (local loopback), but failure to reach same-subnet devices indicates a Data Link layer issue such as incorrect MAC address resolution or switch port misconfiguration.",
        difficulty: "Easy",
        topic: "OSI Model"
    },
    {
        id: "cn-2",
        question: "During a packet capture, you see a frame with a source MAC of 00:00:0C:11:22:33. What does the OUI 00:00:0C indicate?",
        options: [
            "Cisco Systems",
            "Intel Corporation",
            "Juniper Networks",
            "Broadcom"
        ],
        answer: 0,
        explanation: "The first three octets of a MAC address form the Organizationally Unique Identifier (OUI). 00:00:0C is registered to Cisco Systems.",
        difficulty: "Easy",
        topic: "MAC Address"
    },
    {
        id: "cn-3",
        question: "Which protocol operates at the Session Layer of the OSI model?",
        options: [
            "TCP",
            "NetBIOS",
            "IP",
            "Ethernet"
        ],
        answer: 1,
        explanation: "NetBIOS provides session-layer services including session establishment, maintenance, and termination between applications. TCP operates at the Transport layer, IP at Network, and Ethernet at Data Link.",
        difficulty: "Easy",
        topic: "Session Layer"
    },
    {
        id: "cn-4",
        question: "What is the maximum cable length for a Cat6 Ethernet segment in a standard 1000BASE-T deployment?",
        options: [
            "50 meters",
            "100 meters",
            "185 meters",
            "500 meters"
        ],
        answer: 1,
        explanation: "1000BASE-T over Cat6 follows the same 100-meter maximum segment length as other IEEE 802.3 copper standards, divided as 90 meters horizontal cabling plus 10 meters for patch cords.",
        difficulty: "Easy",
        topic: "Ethernet"
    },
    {
        id: "cn-5",
        question: "A client sends a DNS query for example.com and receives a response in 2ms. The next query for the same domain returns in 0ms. What caused this?",
        options: [
            "DNS forwarding",
            "DNS caching",
            "DNS load balancing",
            "DNS failover"
        ],
        answer: 1,
        explanation: "The local DNS resolver cached the previous response, allowing it to answer the second query immediately without contacting an external DNS server.",
        difficulty: "Easy",
        topic: "DNS Resolution"
    },
    {
        id: "cn-6",
        question: "Which IPv4 address class supports the largest number of hosts per network by default?",
        options: [
            "Class A",
            "Class B",
            "Class C",
            "Class D"
        ],
        answer: 0,
        explanation: "Class A addresses use an 8-bit network portion and 24-bit host portion, allowing up to 16,777,214 hosts per network, which is the largest among classful addressing.",
        difficulty: "Easy",
        topic: "IPv4"
    },
    {
        id: "cn-7",
        question: "In TCP/IP model, which layer combines the functionality of OSI Physical and Data Link layers?",
        options: [
            "Internet Layer",
            "Transport Layer",
            "Network Access Layer",
            "Application Layer"
        ],
        answer: 2,
        explanation: "The Network Access Layer (also called Link Layer or Network Interface Layer) in the TCP/IP model encompasses both Physical and Data Link layer responsibilities from the OSI model.",
        difficulty: "Easy",
        topic: "TCP/IP Model"
    },
    {
        id: "cn-8",
        question: "What does the TTL field in an IPv4 header represent?",
        options: [
            "Time in milliseconds before the packet is dropped",
            "Maximum number of routers a packet can pass through",
            "Priority level of the packet",
            "Total transmission time allowed"
        ],
        answer: 1,
        explanation: "TTL (Time to Live) is a counter decremented by each router. When it reaches zero, the packet is discarded to prevent infinite routing loops.",
        difficulty: "Easy",
        topic: "IPv4"
    },
    {
        id: "cn-9",
        question: "Which well-known port number does HTTPS use by default?",
        options: [
            "80",
            "443",
            "8080",
            "8443"
        ],
        answer: 1,
        explanation: "HTTPS operates on TCP port 443 by default. Port 80 is for HTTP, while 8080 and 8443 are common alternative ports but not the standard.",
        difficulty: "Easy",
        topic: "Well Known Ports"
    },
    {
        id: "cn-10",
        question: "A hub receives a frame on one port. What does it do with that frame?",
        options: [
            "Forwards it only to the destination port",
            "Forwards it to all ports except the receiving port",
            "Drops it if the MAC table is full",
            "Stores it in a buffer until requested"
        ],
        answer: 1,
        explanation: "A hub is a Layer 1 device that has no intelligence to identify destination ports. It floods every incoming frame to all ports except the source port, creating a single collision domain.",
        difficulty: "Easy",
        topic: "Hub"
    },
    {
        id: "cn-11",
        question: "Which tool is used to view active TCP connections, listening ports, and interface statistics on a Linux machine?",
        options: [
            "ping",
            "traceroute",
            "netstat",
            "nslookup"
        ],
        answer: 2,
        explanation: "netstat displays network connections, routing tables, interface statistics, and listening ports. It is commonly replaced by 'ss' in modern Linux distributions.",
        difficulty: "Easy",
        topic: "Netstat"
    },
    {
        id: "cn-12",
        question: "What is the purpose of the preamble field in an Ethernet frame?",
        options: [
            "To specify the frame's priority",
            "To allow the receiver to synchronize its clock",
            "To carry the destination IP address",
            "To indicate the frame's total length"
        ],
        answer: 1,
        explanation: "The 7-byte preamble consists of alternating 1s and 0s that help the receiving NIC synchronize its internal clock with the incoming bit stream before the actual data arrives.",
        difficulty: "Easy",
        topic: "Ethernet"
    },
    {
        id: "cn-13",
        question: "Which private IP address range is defined in RFC 1918 for Class C?",
        options: [
            "10.0.0.0 - 10.255.255.255",
            "172.16.0.0 - 172.31.255.255",
            "192.168.0.0 - 192.168.255.255",
            "169.254.0.0 - 169.254.255.255"
        ],
        answer: 2,
        explanation: "RFC 1918 defines three private address ranges: 10.0.0.0/8 (Class A), 172.16.0.0/12 (Class B), and 192.168.0.0/16 (Class C). The 169.254.x.x range is for link-local addresses.",
        difficulty: "Easy",
        topic: "Private vs Public IP"
    },
    {
        id: "cn-14",
        question: "What is the loopback address in IPv4?",
        options: [
            "0.0.0.0",
            "127.0.0.1",
            "255.255.255.255",
            "224.0.0.1"
        ],
        answer: 1,
        explanation: "127.0.0.1 is the standard loopback address. The entire 127.0.0.0/8 block is reserved for loopback testing, where packets never leave the host.",
        difficulty: "Easy",
        topic: "Loopback Address"
    },
    {
        id: "cn-15",
        question: "Which DHCP message type does a client broadcast first to discover a DHCP server?",
        options: [
            "DHCP Offer",
            "DHCP Request",
            "DHCP Discover",
            "DHCP Acknowledge"
        ],
        answer: 2,
        explanation: "The DHCP Discovery message is the first broadcast sent by a client to locate available DHCP servers on the network. Servers then respond with DHCP Offer messages.",
        difficulty: "Easy",
        topic: "DHCP"
    },
    {
        id: "cn-16",
        question: "How many bits are in an IPv6 address?",
        options: [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        answer: 2,
        explanation: "IPv6 uses 128-bit addresses, represented as eight groups of four hexadecimal digits, providing a vastly larger address space compared to IPv4's 32 bits.",
        difficulty: "Easy",
        topic: "IPv6"
    },
    {
        id: "cn-17",
        question: "Which type of address is used to send a packet to all nodes on a local network segment?",
        options: [
            "Unicast",
            "Multicast",
            "Broadcast",
            "Anycast"
        ],
        answer: 2,
        explanation: "A broadcast address (255.255.255.255 for IPv4 or FF:FF:FF:FF:FF:FF for MAC) delivers a packet to every device on the local network segment.",
        difficulty: "Easy",
        topic: "Broadcast"
    },
    {
        id: "cn-18",
        question: "What is the primary function of a repeater?",
        options: [
            "Filter broadcast traffic",
            "Regenerate and amplify signals",
            "Route packets between subnets",
            "Translate between protocols"
        ],
        answer: 1,
        explanation: "A repeater operates at the Physical layer to regenerate and amplify weak signals, extending the effective range of a network segment without intelligent filtering.",
        difficulty: "Easy",
        topic: "Repeater"
    },
    {
        id: "cn-19",
        question: "Which protocol is used to securely transfer files over an SSH connection?",
        options: [
            "FTP",
            "TFTP",
            "SFTP",
            "SCP only"
        ],
        answer: 2,
        explanation: "SFTP (SSH File Transfer Protocol) provides secure file transfer over SSH. While SCP also uses SSH, SFTP offers more features like directory listing and resuming transfers.",
        difficulty: "Easy",
        topic: "SFTP"
    },
    {
        id: "cn-20",
        question: "In a star topology, what happens if the central device fails?",
        options: [
            "Only the directly connected devices are affected",
            "All devices on the network lose connectivity",
            "Traffic is automatically rerouted",
            "Only wireless devices are affected"
        ],
        answer: 1,
        explanation: "In a star topology, all devices connect through a central hub or switch. If the central device fails, all devices lose their interconnection, making it a single point of failure.",
        difficulty: "Easy",
        topic: "Star"
    },
    {
        id: "cn-21",
        question: "Which Wi-Fi standard introduced MIMO (Multiple Input Multiple Output) technology?",
        options: [
            "802.11a",
            "802.11b",
            "802.11n",
            "802.11g"
        ],
        answer: 2,
        explanation: "802.11n (Wi-Fi 4) introduced MIMO technology, which uses multiple antennas to improve throughput and range. It also moved from 2.4 GHz to support both 2.4 GHz and 5 GHz bands.",
        difficulty: "Easy",
        topic: "Wi-Fi Standards"
    },
    {
        id: "cn-22",
        question: "What does the 'S' flag indicate in a TCP segment header when viewed in Wireshark?",
        options: [
            "Segment is the last one",
            "SYN flag is set",
            "Sender is a server",
            "Segment is secure"
        ],
        answer: 1,
        explanation: "In Wireshark's TCP flag display, 'S' indicates the SYN (Synchronize) flag is set, which is used during TCP connection establishment to initiate a three-way handshake.",
        difficulty: "Easy",
        topic: "TCP Handshake"
    },
    {
        id: "cn-23",
        question: "Which network device operates at Layer 3 of the OSI model?",
        options: [
            "Switch",
            "Hub",
            "Router",
            "Bridge"
        ],
        answer: 2,
        explanation: "A router operates at the Network layer (Layer 3) and makes forwarding decisions based on IP addresses. Switches and bridges operate at Layer 2, and hubs at Layer 1.",
        difficulty: "Easy",
        topic: "Router"
    },
    {
        id: "cn-24",
        question: "What is the subnet mask for a /26 CIDR notation?",
        options: [
            "255.255.255.128",
            "255.255.255.192",
            "255.255.255.224",
            "255.255.255.240"
        ],
        answer: 1,
        explanation: "A /26 prefix means 26 bits for the network. The last octet has 2 network bits (11000000), which equals 192 in decimal, giving 255.255.255.192.",
        difficulty: "Easy",
        topic: "CIDR"
    },
    {
        id: "cn-25",
        question: "Which email protocol allows a client to manage emails directly on the server without downloading them?",
        options: [
            "POP3",
            "IMAP",
            "SMTP",
            "SNMP"
        ],
        answer: 1,
        explanation: "IMAP (Internet Message Access Protocol) allows clients to access and manipulate emails on the server without downloading. POP3 typically downloads and removes emails from the server.",
        difficulty: "Easy",
        topic: "IMAP"
    },
    {
        id: "cn-26",
        question: "What is the default administrative distance of a directly connected route in Cisco IOS?",
        options: [
            "0",
            "1",
            "90",
            "120"
        ],
        answer: 0,
        explanation: "Directly connected routes have an administrative distance of 0, making them the most trusted route source. Static routes have AD 1, and dynamic protocols have higher values.",
        difficulty: "Easy",
        topic: "Static Routing"
    },
    {
        id: "cn-27",
        question: "Which type of cable is used to connect two PCs directly without a switch?",
        options: [
            "Straight-through cable",
            "Crossover cable",
            "Rollover cable",
            "Console cable"
        ],
        answer: 1,
        explanation: "A crossover cable swaps the transmit and receive pairs, allowing two similar devices (PC-to-PC or switch-to-switch) to communicate directly without an intermediate hub or switch.",
        difficulty: "Easy",
        topic: "Copper Cable"
    },
    {
        id: "cn-28",
        question: "What is the primary difference between TCP and UDP?",
        options: [
            "TCP is faster than UDP",
            "TCP is connection-oriented; UDP is connectionless",
            "UDP supports error correction; TCP does not",
            "TCP works only on IPv6; UDP works on IPv4"
        ],
        answer: 1,
        explanation: "TCP establishes a connection before data transfer (three-way handshake) and guarantees reliable delivery. UDP sends data without connection setup, offering lower latency but no delivery guarantees.",
        difficulty: "Easy",
        topic: "TCP"
    },
    {
        id: "cn-29",
        question: "Which command on a Cisco switch displays the MAC address table?",
        options: [
            "show ip route",
            "show mac address-table",
            "show interfaces",
            "show running-config"
        ],
        answer: 1,
        explanation: "The 'show mac address-table' command displays the switch's MAC address table, which maps learned MAC addresses to their corresponding switch ports.",
        difficulty: "Easy",
        topic: "Switch"
    },
    {
        id: "cn-30",
        question: "What does ICMP stand for?",
        options: [
            "Internal Control Message Protocol",
            "Internet Control Message Protocol",
            "Integrated Connection Management Protocol",
            "Internet Connection Messaging Protocol"
        ],
        answer: 1,
        explanation: "ICMP (Internet Control Message Protocol) is used by network devices to send error messages and operational information, such as the familiar ping command's echo request and reply.",
        difficulty: "Easy",
        topic: "ICMP"
    },
    {
        id: "cn-31",
        question: "Which port does SSH use by default?",
        options: [
            "21",
            "22",
            "23",
            "25"
        ],
        answer: 1,
        explanation: "SSH (Secure Shell) uses TCP port 22 by default. Port 21 is for FTP, 23 for Telnet, and 25 for SMTP.",
        difficulty: "Easy",
        topic: "SSH"
    },
    {
        id: "cn-32",
        question: "What is the purpose of NAT in a home router?",
        options: [
            "Encrypt network traffic",
            "Translate private IP addresses to a public IP address",
            "Block all incoming traffic",
            "Speed up internet connection"
        ],
        answer: 1,
        explanation: "Network Address Translation (NAT) allows multiple devices with private IP addresses to share a single public IP address for internet access by translating private addresses to the public address in outbound packets.",
        difficulty: "Easy",
        topic: "NAT"
    },
    {
        id: "cn-33",
        question: "Which topology provides the highest redundancy?",
        options: [
            "Bus",
            "Star",
            "Ring",
            "Full Mesh"
        ],
        answer: 3,
        explanation: "In a full mesh topology, every device is connected to every other device, providing the highest level of redundancy. If any single link fails, alternate paths exist for all communications.",
        difficulty: "Easy",
        topic: "Mesh"
    },
    {
        id: "cn-34",
        question: "What is the maximum segment length of 10BASE2 (Thinnet) coaxial cable?",
        options: [
            "100 meters",
            "185 meters",
            "500 meters",
            "2000 meters"
        ],
        answer: 1,
        explanation: "10BASE2 (Thinnet) has a maximum segment length of 185 meters. 10BASE5 (Thicknet) supports 500 meters, and fiber optic segments can reach much longer distances.",
        difficulty: "Easy",
        topic: "Coaxial"
    },
    {
        id: "cn-35",
        question: "Which protocol is used to synchronize time across network devices?",
        options: [
            "SNMP",
            "LDAP",
            "NTP",
            "RTP"
        ],
        answer: 2,
        explanation: "NTP (Network Time Protocol) synchronizes the clocks of network devices to within milliseconds of UTC, which is critical for logging, authentication, and certificate validation.",
        difficulty: "Easy",
        topic: "NTP"
    },
    {
        id: "cn-36",
        question: "What does ARP resolve?",
        options: [
            "Domain name to IP address",
            "IP address to MAC address",
            "MAC address to IP address",
            "IP address to domain name"
        ],
        answer: 1,
        explanation: "ARP (Address Resolution Protocol) resolves an IP address to its corresponding MAC address so that data can be properly encapsulated in an Ethernet frame for delivery on the local network.",
        difficulty: "Easy",
        topic: "ARP"
    },
    {
        id: "cn-37",
        question: "How many collision domains exist in a 4-port hub?",
        options: [
            "1",
            "2",
            "4",
            "0"
        ],
        answer: 0,
        explanation: "A hub is a single collision domain device. All ports share the same collision domain because a hub simply repeats all incoming signals to every other port without any segmentation.",
        difficulty: "Easy",
        topic: "Collision Domain"
    },
    {
        id: "cn-38",
        question: "Which HTTP method is idempotent and used to retrieve data from a server?",
        options: [
            "POST",
            "GET",
            "PATCH",
            "DELETE"
        ],
        answer: 1,
        explanation: "GET is idempotent, meaning multiple identical requests produce the same result. It retrieves data without modifying server state, unlike POST which may create or modify resources.",
        difficulty: "Easy",
        topic: "HTTP Methods"
    },
    {
        id: "cn-39",
        question: "What is the broadcast MAC address?",
        options: [
            "00:00:00:00:00:00",
            "FF:FF:FF:FF:FF:FF",
            "01:00:5E:00:00:00",
            "FF:00:00:00:00:00"
        ],
        answer: 1,
        explanation: "FF:FF:FF:FF:FF:FF is the broadcast MAC address. Frames sent to this address are delivered to all devices on the local network segment.",
        difficulty: "Easy",
        topic: "MAC Address"
    },
    {
        id: "cn-40",
        question: "Which IPv6 address type is used for unique local addressing, similar to IPv4 private addresses?",
        options: [
            "Link-local (fe80::/10)",
            "Unique local (fc00::/7)",
            "Global unicast (2000::/3)",
            "Multicast (ff00::/8)"
        ],
        answer: 1,
        explanation: "Unique local addresses (fc00::/7) are the IPv6 equivalent of RFC 1918 private addresses. They are not routable on the public internet and are used for local communications.",
        difficulty: "Easy",
        topic: "IPv6"
    },
    {
        id: "cn-41",
        question: "What is the main advantage of fiber optic cable over copper cable?",
        options: [
            "Lower cost per meter",
            "Immunity to electromagnetic interference",
            "Easier to terminate",
            "Requires no special equipment"
        ],
        answer: 1,
        explanation: "Fiber optic cables transmit light signals, making them immune to electromagnetic interference (EMI) and radio frequency interference (RFI), unlike copper cables which can be affected by nearby electrical sources.",
        difficulty: "Easy",
        topic: "Fiber Optics"
    },
    {
        id: "cn-42",
        question: "Which SNMP version supports encryption and authentication?",
        options: [
            "SNMPv1",
            "SNMPv2c",
            "SNMPv3",
            "SNMPv2u"
        ],
        answer: 2,
        explanation: "SNMPv3 introduces security features including authentication (USM) and encryption (privacy), addressing the security weaknesses of SNMPv1 and SNMPv2c which send data in cleartext.",
        difficulty: "Easy",
        topic: "SNMP"
    },
    {
        id: "cn-43",
        question: "What is the purpose of a default gateway?",
        options: [
            "To assign IP addresses to clients",
            "To forward packets to destinations outside the local subnet",
            "To resolve domain names",
            "To block unauthorized access"
        ],
        answer: 1,
        explanation: "The default gateway is the router interface on the local subnet that forwards packets to destinations not on the local network. Without it, a device can only communicate within its own subnet.",
        difficulty: "Easy",
        topic: "Default Gateway"
    },
    {
        id: "cn-44",
        question: "Which protocol uses port 53?",
        options: [
            "DHCP",
            "DNS",
            "HTTP",
            "FTP"
        ],
        answer: 1,
        explanation: "DNS (Domain Name System) uses both TCP and UDP port 53. UDP is used for standard queries, and TCP is used for zone transfers and large responses.",
        difficulty: "Easy",
        topic: "Well Known Ports"
    },
    {
        id: "cn-45",
        question: "What does a bridge use to make forwarding decisions?",
        options: [
            "IP addresses",
            "MAC addresses",
            "Port numbers",
            "Application layer data"
        ],
        answer: 1,
        explanation: "A bridge operates at Layer 2 and builds a MAC address table to learn which MAC addresses are reachable through which ports, making forwarding decisions based on destination MAC addresses.",
        difficulty: "Easy",
        topic: "Bridge"
    },
    {
        id: "cn-46",
        question: "Which transport layer protocol is used by DNS for standard queries?",
        options: [
            "TCP only",
            "UDP only",
            "Both TCP and UDP",
            "Neither TCP nor UDP"
        ],
        answer: 1,
        explanation: "Standard DNS queries use UDP for speed and low overhead. TCP is used only when the response exceeds 512 bytes or for zone transfers between DNS servers.",
        difficulty: "Easy",
        topic: "DNS"
    },
    {
        id: "cn-47",
        question: "What is the binary representation of the decimal IP address 192.168.1.1?",
        options: [
            "11000000.10101000.00000001.00000001",
            "11000000.10101000.00000001.00000010",
            "10110000.10101000.00000001.00000001",
            "11000000.10100100.00000001.00000001"
        ],
        answer: 0,
        explanation: "192=11000000, 168=10101000, 1=00000001, 1=00000001. Converting each octet from decimal to binary gives the correct representation.",
        difficulty: "Easy",
        topic: "IP Address"
    },
    {
        id: "cn-48",
        question: "Which type of NAT maps multiple private IPs to a single public IP using different port numbers?",
        options: [
            "Static NAT",
            "Dynamic NAT",
            "PAT (NAT Overload)",
            "NAT with route-maps"
        ],
        answer: 2,
        explanation: "PAT (Port Address Translation), also called NAT Overload, maps multiple private IP addresses to a single public IP by using unique source port numbers to differentiate connections.",
        difficulty: "Easy",
        topic: "PAT"
    },
    {
        id: "cn-49",
        question: "What is the purpose of the Start Frame Delimiter (SFD) in an Ethernet frame?",
        options: [
            "To indicate the beginning of the frame after preamble synchronization",
            "To carry the destination MAC address",
            "To specify the frame's payload length",
            "To provide error detection"
        ],
        answer: 0,
        explanation: "The SFD (10101011) immediately follows the preamble and signals to the receiver that the actual frame content begins with the next bit. It marks the transition from synchronization to data.",
        difficulty: "Easy",
        topic: "Ethernet"
    },
    {
        id: "cn-50",
        question: "Which command tests connectivity between two network devices by sending ICMP echo requests?",
        options: [
            "tracert",
            "ping",
            "netstat",
            "arp"
        ],
        answer: 1,
        explanation: "The ping command sends ICMP Echo Request messages and waits for Echo Reply messages to verify reachability and measure round-trip time between two devices.",
        difficulty: "Easy",
        topic: "Ping"
    },
    {
        id: "cn-51",
        question: "Which connector type is commonly used with Cat5e/Cat6 Ethernet cables?",
        options: [
            "RJ-11",
            "RJ-45",
            "SC",
            "LC"
        ],
        answer: 1,
        explanation: "RJ-45 is the standard connector for Ethernet cables (Cat5e, Cat6, etc.). RJ-11 is used for telephone cables, while SC and LC are fiber optic connectors.",
        difficulty: "Easy",
        topic: "RJ45"
    },
    {
        id: "cn-52",
        question: "What is a socket in networking?",
        options: [
            "A physical port on a switch",
            "The combination of IP address and port number",
            "A type of network cable",
            "A Layer 2 frame header"
        ],
        answer: 1,
        explanation: "A socket is the endpoint of a two-way communication link between two programs, uniquely identified by the combination of an IP address and a port number.",
        difficulty: "Easy",
        topic: "Socket"
    },
    {
        id: "cn-53",
        question: "Which protocol is used to send email from a client to a mail server?",
        options: [
            "POP3",
            "IMAP",
            "SMTP",
            "HTTP"
        ],
        answer: 2,
        explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending email from a client to a server and between mail servers. POP3 and IMAP are used for receiving/retrieving emails.",
        difficulty: "Easy",
        topic: "SMTP"
    },
    {
        id: "cn-54",
        question: "In a bus topology, what happens when a cable break occurs?",
        options: [
            "Only the affected device is disconnected",
            "The entire network segment goes down",
            "Traffic is automatically rerouted",
            "The break is transparent to users"
        ],
        answer: 1,
        explanation: "In a bus topology, all devices share a single cable. A break in the cable causes signal reflection and terminates communication for the entire segment.",
        difficulty: "Easy",
        topic: "Bus"
    },
    {
        id: "cn-55",
        question: "What does the 'ipconfig /release' command do on Windows?",
        options: [
            "Renews the DHCP lease",
            "Releases the currently assigned IP address",
            "Displays the DNS cache",
            "Flushes the ARP table"
        ],
        answer: 1,
        explanation: "The 'ipconfig /release' command sends a DHCP Release message to the server, dropping the currently assigned IP configuration from the client.",
        difficulty: "Easy",
        topic: "DHCP Lease"
    },
    {
        id: "cn-56",
        question: "Which layer of the OSI model is responsible for data compression and encryption?",
        options: [
            "Session Layer",
            "Transport Layer",
            "Presentation Layer",
            "Application Layer"
        ],
        answer: 2,
        explanation: "The Presentation Layer handles data translation, compression, and encryption. It ensures that data sent by the application layer of one system is readable by the application layer of another.",
        difficulty: "Easy",
        topic: "Presentation Layer"
    },
    {
        id: "cn-57",
        question: "What is the primary function of a modem?",
        options: [
            "To route packets between networks",
            "To modulate and demodulate signals for transmission",
            "To filter malicious traffic",
            "To manage VLANs"
        ],
        answer: 1,
        explanation: "A modem (modulator-demodulator) converts digital data to analog signals for transmission over analog media (like telephone lines) and converts received analog signals back to digital data.",
        difficulty: "Easy",
        topic: "Modem"
    },
    {
        id: "cn-58",
        question: "Which type of traffic does IGMP manage?",
        options: [
            "Unicast",
            "Broadcast",
            "Multicast",
            "Anycast"
        ],
        answer: 2,
        explanation: "IGMP (Internet Group Management Protocol) manages multicast group membership on IPv4 networks, allowing hosts to join or leave multicast groups.",
        difficulty: "Easy",
        topic: "IGMP"
    },
    {
        id: "cn-59",
        question: "What is the minimum Ethernet frame size (excluding preamble and SFD)?",
        options: [
            "46 bytes",
            "64 bytes",
            "1518 bytes",
            "1500 bytes"
        ],
        answer: 1,
        explanation: "The minimum Ethernet frame size is 64 bytes (including the 14-byte header and 4-byte FCS). The minimum payload is 46 bytes, padded if necessary to meet the 64-byte minimum.",
        difficulty: "Easy",
        topic: "Ethernet"
    },
    {
        id: "cn-60",
        question: "Which protocol provides a secure remote login session over an unencrypted network?",
        options: [
            "Telnet",
            "SSH",
            "FTP",
            "HTTP"
        ],
        answer: 1,
        explanation: "SSH (Secure Shell) provides encrypted remote login and command execution. Telnet sends all data in cleartext, making it insecure for use over untrusted networks.",
        difficulty: "Easy",
        topic: "Telnet"
    },
    {
        id: "cn-61",
        question: "What does a firewall primarily do?",
        options: [
            "Speed up network traffic",
            "Monitor and control incoming and outgoing network traffic",
            "Assign IP addresses",
            "Resolve domain names"
        ],
        answer: 1,
        explanation: "A firewall monitors and controls network traffic based on predetermined security rules, acting as a barrier between a trusted internal network and an untrusted external network.",
        difficulty: "Easy",
        topic: "Firewall"
    },
    {
        id: "cn-62",
        question: "How many broadcast domains exist in a 24-port Layer 2 switch with all ports in the default VLAN?",
        options: [
            "1",
            "24",
            "0",
            "12"
        ],
        answer: 0,
        explanation: "A Layer 2 switch creates one broadcast domain per VLAN. With all ports in the default VLAN (VLAN 1), there is a single broadcast domain, though each port is a separate collision domain.",
        difficulty: "Easy",
        topic: "Broadcast Domain"
    },
    {
        id: "cn-63",
        question: "Which TCP flag is set in the final packet of a normal TCP connection teardown?",
        options: [
            "SYN",
            "FIN and ACK",
            "RST",
            "PSH"
        ],
        answer: 1,
        explanation: "In a graceful TCP termination (four-way handshake), the final ACK packet carries both the FIN and ACK flags, acknowledging the other side's FIN and completing the connection closure.",
        difficulty: "Easy",
        topic: "TCP Termination"
    },
    {
        id: "cn-64",
        question: "What is the link-local address range in IPv6?",
        options: [
            "fc00::/7",
            "fe80::/10",
            "ff00::/8",
            "2000::/3"
        ],
        answer: 1,
        explanation: "IPv6 link-local addresses are in the fe80::/10 range. They are automatically configured on each interface and are used for local segment communication, similar to IPv4's 169.254.0.0/16.",
        difficulty: "Easy",
        topic: "IPv6"
    },
    {
        id: "cn-65",
        question: "Which tool displays the path packets take to reach a destination, showing each hop along the way?",
        options: [
            "ping",
            "netstat",
            "traceroute",
            "nslookup"
        ],
        answer: 2,
        explanation: "traceroute sends packets with incrementally increasing TTL values, causing each router along the path to return an ICMP Time Exceeded message, revealing the route to the destination.",
        difficulty: "Easy",
        topic: "Traceroute"
    },
    {
        id: "cn-66",
        question: "What is a VLAN?",
        options: [
            "A physical network segment",
            "A logical grouping of devices in the same broadcast domain",
            "A type of routing protocol",
            "A wireless network standard"
        ],
        answer: 1,
        explanation: "A VLAN (Virtual Local Area Network) logically segments a physical network into separate broadcast domains, allowing devices in different physical locations to behave as if they were on the same network.",
        difficulty: "Easy",
        topic: "VLAN"
    },
    {
        id: "cn-67",
        question: "Which addressing mode delivers a packet to the nearest node among a group of nodes sharing the same address?",
        options: [
            "Unicast",
            "Multicast",
            "Broadcast",
            "Anycast"
        ],
        answer: 3,
        explanation: "Anycast routes a packet to the topologically nearest node from a group of nodes that share the same address. It is natively supported in IPv6 and commonly used in CDN and DNS services.",
        difficulty: "Easy",
        topic: "Anycast"
    },
    {
        id: "cn-68",
        question: "What does STP stand for in networking?",
        options: [
            "Shortest Tree Protocol",
            "Spanning Tree Protocol",
            "Secure Transmission Protocol",
            "Simple Transfer Protocol"
        ],
        answer: 1,
        explanation: "Spanning Tree Protocol (STP) prevents Layer 2 loops in switched networks by creating a loop-free logical topology by blocking redundant paths.",
        difficulty: "Easy",
        topic: "STP"
    },
    {
        id: "cn-69",
        question: "Which command is used to query DNS records manually from the command line?",
        options: [
            "ping",
            "tracert",
            "nslookup",
            "arp"
        ],
        answer: 2,
        explanation: "nslookup is a DNS querying tool that allows manual lookup of DNS records including A, AAAA, MX, CNAME, and NS records from command line.",
        difficulty: "Easy",
        topic: "Nslookup"
    },
    {
        id: "cn-70",
        question: "What is the maximum transmission unit (MTU) for standard Ethernet?",
        options: [
            "512 bytes",
            "1000 bytes",
            "1500 bytes",
            "9000 bytes"
        ],
        answer: 2,
        explanation: "The standard MTU for Ethernet is 1500 bytes. Jumbo frames can support up to 9000 bytes, but 1500 bytes is the default for standard IEEE 802.3 Ethernet.",
        difficulty: "Easy",
        topic: "MTU"
    },
    {
        id: "cn-71",
        question: "Which protocol operates at Layer 4 and provides reliable, ordered delivery of data?",
        options: [
            "IP",
            "TCP",
            "ARP",
            "ICMP"
        ],
        answer: 1,
        explanation: "TCP (Transmission Control Protocol) operates at the Transport layer and provides reliable, ordered, error-checked delivery of data through sequence numbers, acknowledgments, and retransmission.",
        difficulty: "Easy",
        topic: "TCP"
    },
    {
        id: "cn-72",
        question: "What is the difference between UTP and STP cables?",
        options: [
            "UTP is faster than STP",
            "STP has additional shielding to reduce EMI",
            "UTP is used for fiber; STP for copper",
            "STP can only carry analog signals"
        ],
        answer: 1,
        explanation: "STP (Shielded Twisted Pair) has an additional metallic shield around each pair or all pairs to reduce electromagnetic interference. UTP (Unshielded Twisted Pair) relies solely on the twisting for noise reduction.",
        difficulty: "Easy",
        topic: "UTP"
    },
    {
        id: "cn-73",
        question: "Which RFC 1918 address range is designated for Class B private networks?",
        options: [
            "10.0.0.0/8",
            "172.16.0.0/12",
            "192.168.0.0/16",
            "169.254.0.0/16"
        ],
        answer: 1,
        explanation: "The 172.16.0.0/12 range (172.16.0.0 to 172.31.255.255) is the Class B private address space defined in RFC 1918.",
        difficulty: "Easy",
        topic: "Private vs Public IP"
    },
    {
        id: "cn-74",
        question: "What is the role of a DNS recursive resolver?",
        options: [
            "To store authoritative zone data",
            "To follow the full DNS resolution chain on behalf of a client",
            "To assign IP addresses to clients",
            "To filter malicious domain requests"
        ],
        answer: 1,
        explanation: "A recursive resolver accepts DNS queries from clients and iteratively queries root, TLD, and authoritative name servers to fully resolve the domain name on behalf of the client.",
        difficulty: "Easy",
        topic: "DNS Resolution"
    },
    {
        id: "cn-75",
        question: "Which switching method reads the entire frame before forwarding?",
        options: [
            "Cut-through",
            "Fragment-free",
            "Store-and-forward",
            "Fast-forward"
        ],
        answer: 2,
        explanation: "Store-and-forward switching reads the entire frame, verifies the FCS for errors, and then forwards it. Cut-through begins forwarding after reading the destination MAC, and fragment-free reads the first 64 bytes.",
        difficulty: "Easy",
        topic: "Switch"
    },
    {
        id: "cn-76",
        question: "What does PoE (Power over Ethernet) allow?",
        options: [
            "Faster data transmission over Ethernet",
            "Delivery of electrical power alongside data over Ethernet cables",
            "Encryption of Ethernet frames",
            "Auto-negotiation of duplex settings"
        ],
        answer: 1,
        explanation: "PoE allows network cables to carry electrical power to powered devices such as IP phones, wireless access points, and security cameras, eliminating the need for separate power supplies.",
        difficulty: "Easy",
        topic: "PoE"
    },
    {
        id: "cn-77",
        question: "Which protocol is used for network device authentication and authorization in enterprise networks?",
        options: [
            "SNMP",
            "LDAP",
            "RADIUS",
            "DNS"
        ],
        answer: 2,
        explanation: "RADIUS (Remote Authentication Dial-In User Service) is widely used for centralized authentication, authorization, and accounting of network device access, especially for VPN and Wi-Fi.",
        difficulty: "Easy",
        topic: "Network Security"
    },
    {
        id: "cn-78",
        question: "What is a reverse proxy?",
        options: [
            "A proxy that forwards client requests to the internet",
            "A proxy that accepts requests from the internet and forwards them to internal servers",
            "A proxy that caches DNS responses",
            "A proxy that encrypts all outgoing traffic"
        ],
        answer: 1,
        explanation: "A reverse proxy sits in front of internal servers and accepts requests from external clients, forwarding them to the appropriate backend server. It provides load balancing, security, and caching.",
        difficulty: "Easy",
        topic: "Reverse Proxy"
    },
    {
        id: "cn-79",
        question: "Which type of DNS record maps a domain name to an IPv4 address?",
        options: [
            "AAAA record",
            "CNAME record",
            "A record",
            "MX record"
        ],
        answer: 2,
        explanation: "An A record maps a domain name to an IPv4 address. AAAA records map to IPv6 addresses, CNAME records create aliases, and MX records specify mail servers.",
        difficulty: "Easy",
        topic: "DNS"
    },
    {
        id: "cn-80",
        question: "What is the purpose of QoS in a network?",
        options: [
            "To encrypt all network traffic",
            "To prioritize certain types of traffic over others",
            "To block unauthorized users",
            "To increase total bandwidth"
        ],
        answer: 1,
        explanation: "Quality of Service (QoS) mechanisms prioritize sensitive traffic like VoIP and video over less time-sensitive traffic like file downloads, ensuring consistent performance for critical applications.",
        difficulty: "Easy",
        topic: "QoS"
    },
    {
        id: "cn-81",
        question: "Which Bluetooth class has the shortest range, typically up to 1 meter?",
        options: [
            "Class 1",
            "Class 2",
            "Class 3",
            "Class 4"
        ],
        answer: 2,
        explanation: "Bluetooth Class 3 devices have the shortest range at about 1 meter. Class 2 covers about 10 meters (most common), and Class 1 can reach up to 100 meters.",
        difficulty: "Easy",
        topic: "Bluetooth"
    },
    {
        id: "cn-82",
        question: "What does TFTP use as its transport layer protocol?",
        options: [
            "TCP",
            "UDP",
            "SCTP",
            "DCCP"
        ],
        answer: 1,
        explanation: "TFTP (Trivial File Transfer Protocol) uses UDP port 69 for its simplicity and low overhead, making it suitable for booting diskless workstations and firmware updates where speed matters more than reliability.",
        difficulty: "Easy",
        topic: "TFTP"
    },
    {
        id: "cn-83",
        question: "Which network device can separate collision domains without separating broadcast domains?",
        options: [
            "Router",
            "Hub",
            "Layer 2 Switch",
            "Firewall"
        ],
        answer: 2,
        explanation: "A Layer 2 switch creates a separate collision domain for each port but all ports remain in the same broadcast domain (unless VLANs are configured). A router separates both collision and broadcast domains.",
        difficulty: "Easy",
        topic: "Layer 2 Switch"
    },
    {
        id: "cn-84",
        question: "What is the purpose of a trunk link between switches?",
        options: [
            "To connect a PC to a switch",
            "To carry traffic for multiple VLANs between switches",
            "To provide internet access",
            "To block unauthorized VLANs"
        ],
        answer: 1,
        explanation: "A trunk link uses VLAN tagging (like IEEE 802.1Q) to carry traffic for multiple VLANs over a single physical link between switches or between a switch and a router.",
        difficulty: "Easy",
        topic: "Trunking"
    },
    {
        id: "cn-85",
        question: "Which command on a Cisco router displays the routing table?",
        options: [
            "show interfaces",
            "show ip route",
            "show mac address-table",
            "show running-config"
        ],
        answer: 1,
        explanation: "'show ip route' displays the IP routing table, including directly connected networks, static routes, and dynamically learned routes with their administrative distances and metrics.",
        difficulty: "Easy",
        topic: "Routing Table"
    },
    {
        id: "cn-86",
        question: "What is a CDN?",
        options: [
            "A type of VPN tunnel",
            "A distributed network of servers that delivers content to users based on their location",
            "A network protocol for file sharing",
            "A cable distribution network"
        ],
        answer: 1,
        explanation: "A Content Delivery Network (CDN) is a geographically distributed network of servers that caches and delivers web content to users from the nearest server, reducing latency and improving load times.",
        difficulty: "Easy",
        topic: "CDN"
    },
    {
        id: "cn-87",
        question: "What does the DHCP ACK message confirm?",
        options: [
            "The client's discovery of servers",
            "The server's offer of an IP address",
            "The server's confirmation of the client's requested IP configuration",
            "The client's rejection of an offer"
        ],
        answer: 2,
        explanation: "The DHCP ACK message from the server confirms and finalizes the IP address lease, including the IP address, subnet mask, default gateway, DNS servers, and lease duration.",
        difficulty: "Easy",
        topic: "DHCP"
    },
    {
        id: "cn-88",
        question: "Which field in the TCP header is used for flow control?",
        options: [
            "Sequence Number",
            "Window Size",
            "Urgent Pointer",
            "Checksum"
        ],
        answer: 1,
        explanation: "The Window Size field indicates the number of bytes the sender is willing to accept, enabling the receiver to control the rate of data transmission and prevent buffer overflow.",
        difficulty: "Easy",
        topic: "Flow Control"
    },
    {
        id: "cn-89",
        question: "What is the primary characteristic of circuit switching?",
        options: [
            "Packets take different paths to the destination",
            "A dedicated communication path is established before data transfer",
            "Data is sent in datagrams",
            "No connection is needed before sending data"
        ],
        answer: 1,
        explanation: "Circuit switching establishes a dedicated end-to-end path before any data is sent, like in traditional telephone networks. The path remains reserved for the entire duration of the communication.",
        difficulty: "Easy",
        topic: "Circuit Switching"
    },
    {
        id: "cn-90",
        question: "Which Wi-Fi standard operates exclusively in the 5 GHz band?",
        options: [
            "802.11b",
            "802.11a",
            "802.11g",
            "802.11n"
        ],
        answer: 1,
        explanation: "802.11a operates exclusively in the 5 GHz band with speeds up to 54 Mbps. 802.11b and 802.11g use 2.4 GHz, while 802.11n supports both bands.",
        difficulty: "Easy",
        topic: "Wi-Fi Standards"
    },
    {
        id: "cn-91",
        question: "What is the 802.1Q standard used for?",
        options: [
            "Wireless encryption",
            "VLAN tagging",
            "Power over Ethernet",
            "Link aggregation"
        ],
        answer: 1,
        explanation: "IEEE 802.1Q defines the standard for VLAN tagging on Ethernet frames, inserting a 4-byte tag into the frame to identify the VLAN membership.",
        difficulty: "Easy",
        topic: "VLAN"
    },
    {
        id: "cn-92",
        question: "Which type of NAT creates a one-to-one mapping between a private and public IP address?",
        options: [
            "PAT",
            "Static NAT",
            "Dynamic NAT with overload",
            "NAT with ACL"
        ],
        answer: 1,
        explanation: "Static NAT creates a fixed one-to-one mapping between a private IP address and a public IP address, commonly used for servers that need a consistent public address.",
        difficulty: "Easy",
        topic: "NAT"
    },
    {
        id: "cn-93",
        question: "What does a load balancer do?",
        options: [
            "Increases internet bandwidth",
            "Distributes incoming network traffic across multiple servers",
            "Balances electrical load on network cables",
            "Compresses network traffic"
        ],
        answer: 1,
        explanation: "A load balancer distributes incoming traffic across multiple backend servers to ensure no single server is overwhelmed, improving availability, reliability, and response times.",
        difficulty: "Easy",
        topic: "Load Balancer"
    },
    {
        id: "cn-94",
        question: "Which protocol is used for secure web browsing, encrypting HTTP traffic?",
        options: [
            "FTP",
            "SSH",
            "TLS",
            "SMTP"
        ],
        answer: 2,
        explanation: "TLS (Transport Layer Security) encrypts HTTP traffic to create HTTPS. It provides authentication, encryption, and data integrity between a web client and server.",
        difficulty: "Easy",
        topic: "TLS"
    },
    {
        id: "cn-95",
        question: "What is the IPv4 multicast address range?",
        options: [
            "0.0.0.0 - 127.255.255.255",
            "224.0.0.0 - 239.255.255.255",
            "240.0.0.0 - 255.255.255.255",
            "192.0.0.0 - 223.255.255.255"
        ],
        answer: 1,
        explanation: "IPv4 multicast addresses are in the Class D range of 224.0.0.0 to 239.255.255.255. The range 224.0.0.0/24 is reserved for local network multicast.",
        difficulty: "Easy",
        topic: "Multicast"
    },
    {
        id: "cn-96",
        question: "Which wireless technology has the shortest typical range, designed for near-field communication?",
        options: [
            "Bluetooth",
            "Wi-Fi",
            "NFC",
            "Zigbee"
        ],
        answer: 2,
        explanation: "NFC (Near Field Communication) operates at very short ranges (typically under 10 cm) and is used for contactless payments, access cards, and device pairing.",
        difficulty: "Easy",
        topic: "NFC"
    },
    {
        id: "cn-97",
        question: "What is the purpose of the ARP table?",
        options: [
            "To store DNS query results",
            "To map IP addresses to MAC addresses for the local network",
            "To store routing information",
            "To track active TCP connections"
        ],
        answer: 1,
        explanation: "The ARP table (also called ARP cache) stores mappings of IP addresses to their corresponding MAC addresses that have been learned through ARP requests and replies on the local network.",
        difficulty: "Easy",
        topic: "ARP Table"
    },
    {
        id: "cn-98",
        question: "Which flag in a TCP header indicates that the receiver should push the data to the application immediately?",
        options: [
            "URG",
            "ACK",
            "PSH",
            "RST"
        ],
        answer: 2,
        explanation: "The PSH (Push) flag tells the receiving TCP stack to deliver the data to the application layer immediately rather than buffering it, useful for interactive applications.",
        difficulty: "Easy",
        topic: "TCP"
    },
    {
        id: "cn-99",
        question: "What is the difference between a managed and unmanaged switch?",
        options: [
            "Managed switches are faster",
            "Managed switches support configuration, VLANs, and monitoring; unmanaged switches do not",
            "Unmanaged switches support PoE; managed do not",
            "There is no functional difference"
        ],
        answer: 1,
        explanation: "Managed switches provide features like VLAN support, QoS, port mirroring, SNMP monitoring, and CLI/web management. Unmanaged switches are plug-and-play with no configuration options.",
        difficulty: "Easy",
        topic: "Managed Switch"
    },
    {
        id: "cn-100",
        question: "What does the dig command do?",
        options: [
            "Pings a host",
            "Performs DNS lookups and displays detailed results",
            "Displays the routing table",
            "Captures network packets"
        ],
        answer: 1,
        explanation: "The dig (Domain Information Groper) command performs DNS lookups and returns detailed information about DNS records, including query time, server, and answer sections.",
        difficulty: "Easy",
        topic: "Dig"
    },
    {
        id: "cn-101",
        question: "A host sends an ARP request for 192.168.1.100 but receives no reply. The target host is confirmed to be powered on and on the same subnet. What is the most likely cause?",
        options: [
            "The default gateway is misconfigured",
            "The target host has a firewall blocking ARP requests",
            "The target host's IP address is on a different VLAN",
            "DNS resolution has failed"
        ],
        answer: 2,
        explanation: "ARP operates only within a single broadcast domain. If the target host is on a different VLAN, the ARP broadcast will not reach it, and the sending host needs to ARP for its default gateway instead.",
        difficulty: "Medium",
        topic: "ARP"
    },
    {
        id: "cn-102",
        question: "In a TCP connection, the sender has a congestion window of 32 KB and the receiver advertises a window of 16 KB. What is the effective send window?",
        options: [
            "32 KB",
            "16 KB",
            "48 KB",
            "8 KB"
        ],
        answer: 1,
        explanation: "The effective send window is the minimum of the congestion window (cwnd) and the receiver's advertised window (rwnd). Here, min(32KB, 16KB) = 16 KB.",
        difficulty: "Medium",
        topic: "Congestion Control"
    },
    {
        id: "cn-103",
        question: "What happens when a router receives a packet with a TTL of 1?",
        options: [
            "It forwards the packet to the next hop",
            "It decrements TTL to 0 and forwards it",
            "It decrements TTL to 0, drops the packet, and sends an ICMP Time Exceeded message",
            "It buffers the packet for retransmission"
        ],
        answer: 2,
        explanation: "The router decrements the TTL from 1 to 0, recognizes it has expired, drops the packet, and sends an ICMP Time Exceeded message back to the source. This is how traceroute identifies hops.",
        difficulty: "Medium",
        topic: "IPv4"
    },
    {
        id: "cn-104",
        question: "Which OSPF area type blocks external routes but allows inter-area routes?",
        options: [
            "Backbone area (Area 0)",
            "Stub area",
            "Totally stubby area",
            "Not-so-stubby area (NSSA)"
        ],
        answer: 1,
        explanation: "A stub area blocks Type 5 (external) LSAs but allows Type 3 (summary) LSAs for inter-area routes. A totally stubby area blocks both external and inter-area summary routes.",
        difficulty: "Medium",
        topic: "OSPF"
    },
    {
        id: "cn-105",
        question: "A network administrator configures an ACL with the rule 'deny ip any any log'. Where should this rule be placed in the ACL?",
        options: [
            "At the beginning of the ACL",
            "At the end of the ACL as an implicit deny",
            "In the middle of the ACL",
            "It should not be used at all"
        ],
        answer: 1,
        explanation: "This explicit deny-all rule with logging should be at the end of the ACL. Every ACL has an implicit deny at the end, but adding it explicitly with 'log' helps administrators see what traffic is being blocked.",
        difficulty: "Medium",
        topic: "ACL"
    },
    {
        id: "cn-106",
        question: "What is the key difference between RSTP and STP?",
        options: [
            "RSTP uses a different root bridge election process",
            "RSTP can transition ports to forwarding state without waiting for timers",
            "RSTP eliminates the concept of root ports",
            "RSTP does not use BPDUs"
        ],
        answer: 1,
        explanation: "RSTP (802.1w) uses a proposal/agreement mechanism to quickly transition alternate ports to forwarding state, eliminating the forward delay timers (15+15 seconds) required in traditional STP (802.1D).",
        difficulty: "Medium",
        topic: "RSTP"
    },
    {
        id: "cn-107",
        question: "A /24 network is subnetted with a /27 mask. How many usable subnets are created, and how many usable hosts per subnet?",
        options: [
            "8 subnets, 30 hosts",
            "8 subnets, 32 hosts",
            "6 subnets, 30 hosts",
            "4 subnets, 62 hosts"
        ],
        answer: 0,
        explanation: "Borrowing 3 bits (27-24=3) gives 2^3=8 subnets. With 5 host bits remaining, 2^5-2=30 usable hosts per subnet (subtracting network and broadcast addresses).",
        difficulty: "Medium",
        topic: "Subnetting"
    },
    {
        id: "cn-108",
        question: "In HTTP/1.1, which header enables a single TCP connection to serve multiple requests and responses?",
        options: [
            "Content-Type: keep-alive",
            "Connection: keep-alive",
            "Transfer-Encoding: chunked",
            "Cache-Control: persistent"
        ],
        answer: 1,
        explanation: "The 'Connection: keep-alive' header in HTTP/1.1 enables persistent connections, allowing multiple requests and responses over a single TCP connection, reducing latency from repeated handshakes.",
        difficulty: "Medium",
        topic: "HTTP"
    },
    {
        id: "cn-109",
        question: "What is a broadcast storm and how does STP prevent it?",
        options: [
            "Excessive ARP requests; STP filters ARP packets",
            "Uncontrolled frame looping in a network with redundant paths; STP blocks redundant ports",
            "DNS queries flooding the network; STP limits DNS traffic",
            "TCP SYN floods; STP limits connection rates"
        ],
        answer: 1,
        explanation: "A broadcast storm occurs when frames loop endlessly through redundant Layer 2 paths. STP prevents this by placing redundant ports in a blocking state, ensuring a loop-free topology.",
        difficulty: "Medium",
        topic: "Broadcast Storm"
    },
    {
        id: "cn-110",
        question: "Which BGP attribute is used to influence the return path of traffic by setting it on the receiving AS?",
        options: [
            "AS_PATH",
            "LOCAL_PREF",
            "MED (Multi-Exit Discriminator)",
            "ORIGIN"
        ],
        answer: 2,
        explanation: "MED is advertised to a neighboring AS to influence their inbound traffic path selection. It suggests to the neighboring AS which exit point to prefer when multiple paths exist.",
        difficulty: "Medium",
        topic: "BGP"
    },
    {
        id: "cn-111",
        question: "A web server returns HTTP 301. What does this indicate to the client?",
        options: [
            "The requested resource was not found",
            "The server encountered an internal error",
            "The resource has been permanently moved to a new URL",
            "The request requires authentication"
        ],
        answer: 2,
        explanation: "HTTP 301 (Moved Permanently) indicates the resource has been permanently relocated. The response includes a Location header with the new URL, and browsers typically cache this redirect.",
        difficulty: "Medium",
        topic: "HTTP"
    },
    {
        id: "cn-112",
        question: "What is the primary advantage of using VLSM over fixed-length subnetting?",
        options: [
            "Simpler configuration",
            "More efficient use of IP address space by matching subnet size to network needs",
            "Faster routing convergence",
            "Better security"
        ],
        answer: 1,
        explanation: "VLSM allows different subnets to have different mask lengths, so a point-to-point link can use a /30 (2 hosts) while a LAN uses a /24 (254 hosts), preventing address waste.",
        difficulty: "Medium",
        topic: "VLSM"
    },
    {
        id: "cn-113",
        question: "In Docker networking, which network mode shares the host's network namespace with the container?",
        options: [
            "bridge mode",
            "host mode",
            "overlay mode",
            "none mode"
        ],
        answer: 1,
        explanation: "In host network mode, the container shares the host's network stack and does not get its own IP address. Container ports are bound directly to the host's interfaces.",
        difficulty: "Medium",
        topic: "Docker Networking"
    },
    {
        id: "cn-114",
        question: "A packet with a destination IP of 10.1.2.3 arrives at a router. The routing table has entries for 10.0.0.0/8, 10.1.0.0/16, and 10.1.2.0/24. Which route is selected?",
        options: [
            "10.0.0.0/8",
            "10.1.0.0/16",
            "10.1.2.0/24",
            "The router loads balances across all three"
        ],
        answer: 2,
        explanation: "Routers follow the longest prefix match rule. The /24 mask is the most specific match for 10.1.2.3, so 10.1.2.0/24 is selected over the less specific /16 and /8 routes.",
        difficulty: "Medium",
        topic: "Routing"
    },
    {
        id: "cn-115",
        question: "What is the purpose of the TCP SYN cookie mechanism?",
        options: [
            "To encrypt SYN packets",
            "To defend against SYN flood attacks without maintaining per-connection state",
            "To speed up the TCP three-way handshake",
            "To compress TCP headers"
        ],
        answer: 1,
        explanation: "SYN cookies encode the connection state into the initial SYN-ACK's sequence number, allowing the server to validate legitimate connections without allocating resources for half-open connections during a SYN flood.",
        difficulty: "Medium",
        topic: "SYN Flood"
    },
    {
        id: "cn-116",
        question: "Which EIGRP metric component has the highest default K-value weight?",
        options: [
            "Bandwidth (K1)",
            "Delay (K3)",
            "Reliability (K4)",
            "Load (K2)"
        ],
        answer: 1,
        explanation: "By default, only K1 (Bandwidth) and K3 (Delay) are enabled with values of 1. However, delay has a much larger impact on the composite metric because it is the sum of all interface delays along the path.",
        difficulty: "Medium",
        topic: "EIGRP"
    },
    {
        id: "cn-117",
        question: "A Kubernetes Service of type NodePort is created. On which port range will it be allocated by default?",
        options: [
            "0-1023",
            "1024-49151",
            "30000-32767",
            "49152-65535"
        ],
        answer: 2,
        explanation: "Kubernetes NodePort services are allocated from the default range of 30000-32767. This range can be customized using the --service-node-port-range flag in the API server.",
        difficulty: "Medium",
        topic: "Kubernetes Networking"
    },
    {
        id: "cn-118",
        question: "What is the difference between an IDS and an IPS?",
        options: [
            "IDS blocks attacks; IPS only detects them",
            "IDS monitors and alerts on suspicious activity; IPS can also block the traffic inline",
            "IDS works at Layer 2; IPS works at Layer 7",
            "There is no difference; they are the same"
        ],
        answer: 1,
        explanation: "An Intrusion Detection System (IDS) is typically a passive device that detects and alerts on suspicious traffic. An Intrusion Prevention System (IPS) sits inline and can actively block malicious traffic.",
        difficulty: "Medium",
        topic: "IDS"
    },
    {
        id: "cn-119",
        question: "In AWS, what is the purpose of a Network ACL compared to a Security Group?",
        options: [
            "Security Groups are stateless; Network ACLs are stateful",
            "Network ACLs operate at the subnet level and are stateless; Security Groups operate at the instance level and are stateful",
            "They are identical and interchangeable",
            "Network ACLs only filter inbound traffic"
        ],
        answer: 1,
        explanation: "Network ACLs are stateless rules applied at the subnet level that require both inbound and outbound rules explicitly. Security Groups are stateful, applied to instances, and return traffic is automatically allowed.",
        difficulty: "Medium",
        topic: "AWS Networking Basics"
    },
    {
        id: "cn-120",
        question: "What does a TCP RST (Reset) packet indicate when sent during an established connection?",
        options: [
            "The connection is being gracefully closed",
            "The connection is being abruptly terminated due to an error or refusal",
            "The sender wants to renegotiate the window size",
            "Data was received out of order"
        ],
        answer: 1,
        explanation: "A RST packet forcibly terminates a TCP connection without the normal four-way handshake. It is sent when a connection encounters an error, a port has no listener, or one side wants to abort immediately.",
        difficulty: "Medium",
        topic: "TCP"
    },
    {
        id: "cn-121",
        question: "Which IPv6 extension header is used for fragment reassembly information?",
        options: [
            "Routing Header",
            "Fragment Header",
            "Destination Options Header",
            "Hop-by-Hop Options Header"
        ],
        answer: 1,
        explanation: "The Fragment Header in IPv6 contains the fragment offset, identification, and M (more fragments) flag, used for reassembling fragmented packets at the destination.",
        difficulty: "Medium",
        topic: "IPv6"
    },
    {
        id: "cn-122",
        question: "In SDN architecture, what is the role of the Southbound API?",
        options: [
            "Communication between the SDN controller and network applications",
            "Communication between the SDN controller and network devices",
            "Communication between two SDN controllers",
            "Communication between the SDN controller and cloud APIs"
        ],
        answer: 1,
        explanation: "The Southbound API (like OpenFlow) enables the SDN controller to communicate with and program network devices (switches, routers). The Northbound API communicates with applications.",
        difficulty: "Medium",
        topic: "SDN"
    },
    {
        id: "cn-123",
        question: "What is the consequence of disabling TCP Nagle's algorithm?",
        options: [
            "Larger packets are always sent",
            "Small packets are sent immediately without waiting to buffer data, reducing latency but increasing overhead",
            "The connection becomes unreliable",
            "Flow control is disabled"
        ],
        answer: 1,
        explanation: "Nagle's algorithm buffers small data segments until an ACK is received or enough data accumulates. Disabling it (with TCP_NODELAY) sends data immediately, reducing latency for interactive applications but increasing packet count.",
        difficulty: "Medium",
        topic: "TCP"
    },
    {
        id: "cn-124",
        question: "A network uses RIPv2 with auto-summarization enabled. A router has the network 10.1.2.0/24 on one interface and 10.3.0.0/16 on another. What will it advertise out a third interface?",
        options: [
            "10.1.2.0/24 and 10.3.0.0/16",
            "10.0.0.0/8",
            "10.1.0.0/16 and 10.3.0.0/16",
            "10.1.2.0/24 and 10.0.0.0/8"
        ],
        answer: 1,
        explanation: "With auto-summarization, RIPv2 summarizes routes at classful boundaries. Both networks belong to Class A (10.0.0.0/8), so they are advertised as a single summarized route: 10.0.0.0/8.",
        difficulty: "Medium",
        topic: "RIP"
    },
    {
        id: "cn-125",
        question: "What is the difference between SSL and TLS?",
        options: [
            "SSL is newer than TLS",
            "TLS is the successor to SSL with improved security and different handshake mechanisms",
            "SSL works only with HTTP; TLS works with any protocol",
            "They use different port numbers"
        ],
        answer: 1,
        explanation: "TLS (Transport Layer Security) is the successor to SSL (Secure Sockets Layer). TLS 1.0 was based on SSL 3.0 but introduced improvements like HMAC and different key derivation. SSL is now considered insecure.",
        difficulty: "Medium",
        topic: "SSL"
    },
    {
        id: "cn-126",
        question: "In a three-tier network architecture, which tier is responsible for routing between VLANs and applying security policies?",
        options: [
            "Access tier",
            "Distribution tier",
            "Core tier",
            "Management tier"
        ],
        answer: 1,
        explanation: "The distribution tier aggregates access layer switches, performs inter-VLAN routing, applies ACLs and QoS policies, and provides the boundary between Layer 2 and Layer 3 domains.",
        difficulty: "Medium",
        topic: "Network Topologies"
    },
    {
        id: "cn-127",
        question: "What is the purpose of the MPLS label in an MPLS network?",
        options: [
            "To encrypt the packet payload",
            "To enable fast switching decisions based on a fixed-length label instead of IP lookup",
            "To provide QoS markings only",
            "To compress the IP header"
        ],
        answer: 1,
        explanation: "MPLS adds a fixed-length label (20 bits) between Layer 2 and Layer 3 headers. Routers use label swapping for forwarding decisions, which is faster than IP longest-prefix-match lookups.",
        difficulty: "Medium",
        topic: "MPLS"
    },
    {
        id: "cn-128",
        question: "A Wireshark capture shows repeated TCP retransmissions for a single connection. Which of the following is the LEAST likely cause?",
        options: [
            "Network congestion causing packet loss",
            "A misconfigured firewall silently dropping packets",
            "The TCP window size being too large",
            "A duplex mismatch causing frame collisions"
        ],
        answer: 2,
        explanation: "A large TCP window size alone does not cause retransmissions. It may cause more data in flight but would only lead to retransmissions if intermediate buffers overflow. The other three are common causes of retransmissions.",
        difficulty: "Medium",
        topic: "Network Troubleshooting"
    },
    {
        id: "cn-129",
        question: "Which Kubernetes object manages external access to services in a cluster, typically using L7 load balancing?",
        options: [
            "Service (type LoadBalancer)",
            "Ingress",
            "Service (type NodePort)",
            "NetworkPolicy"
        ],
        answer: 1,
        explanation: "An Ingress provides HTTP/HTTPS routing to services, supporting features like virtual hosting, TLS termination, and path-based routing. LoadBalancer services operate at L4 with external cloud load balancers.",
        difficulty: "Medium",
        topic: "Ingress"
    },
    {
        id: "cn-130",
        question: "What is a zero trust network model?",
        options: [
            "A network with no firewall",
            "A model where no device or user is trusted by default, regardless of network location",
            "A network that blocks all external traffic",
            "A model where only internal users are trusted"
        ],
        answer: 1,
        explanation: "Zero Trust eliminates the concept of a trusted internal network. Every access request must be authenticated, authorized, and encrypted regardless of whether the source is inside or outside the network perimeter.",
        difficulty: "Medium",
        topic: "Zero Trust Networking"
    },
    {
        id: "cn-131",
        question: "In GCP, what is the purpose of a VPC firewall rule's priority field?",
        options: [
            "It determines the packet's QoS priority",
            "It defines the evaluation order; lower numbers are evaluated first",
            "It sets the TCP precedence bits",
            "It determines the bandwidth allocation"
        ],
        answer: 1,
        explanation: "GCP VPC firewall rules are evaluated in priority order, with lower numeric values evaluated first. The first matching rule (allow or deny) is applied, and subsequent rules are skipped.",
        difficulty: "Medium",
        topic: "GCP Networking Basics"
    },
    {
        id: "cn-132",
        question: "A host on VLAN 10 needs to communicate with a host on VLAN 20. What must be configured to enable this?",
        options: [
            "A trunk link between the hosts",
            "Inter-VLAN routing via a Layer 3 switch or router-on-a-stick",
            "A crossover cable between the VLANs",
            "STP must be disabled"
        ],
        answer: 1,
        explanation: "VLANs are separate broadcast domains, so inter-VLAN routing is required. This can be done with a Layer 3 switch (SVI interfaces) or a router with subinterfaces on a trunk link (router-on-a-stick).",
        difficulty: "Medium",
        topic: "VLAN"
    },
    {
        id: "cn-133",
        question: "What is the difference between TCP's fast retransmit and the retransmission timer?",
        options: [
            "They are the same mechanism",
            "Fast retransmit triggers on 3 duplicate ACKs; the timer triggers after a timeout period with no ACK",
            "Fast retransmit is for UDP; the timer is for TCP",
            "The timer triggers on duplicate ACKs; fast retransmit triggers on timeout"
        ],
        answer: 1,
        explanation: "Fast retransmit is triggered when the sender receives 3 duplicate ACKs, indicating a specific packet was lost. The retransmission timer is a fallback that fires when no ACK is received within the RTO period.",
        difficulty: "Medium",
        topic: "TCP"
    },
    {
        id: "cn-134",
        question: "Which Azure networking component provides private connectivity from an on-premises network to Azure VNet over the internet?",
        options: [
            "Azure ExpressRoute",
            "Azure VPN Gateway (Site-to-Site)",
            "Azure Application Gateway",
            "Azure Bastion"
        ],
        answer: 1,
        explanation: "Azure VPN Gateway (Site-to-Site) creates an IPsec/IKE VPN tunnel over the public internet. ExpressRoute uses private connections through a connectivity provider and does not go over the public internet.",
        difficulty: "Medium",
        topic: "Azure Networking Basics"
    },
    {
        id: "cn-135",
        question: "What is the purpose of port security on a switch?",
        options: [
            "To encrypt traffic on specific ports",
            "To limit the number of MAC addresses that can be learned on a port and restrict access to authorized MACs",
            "To enable PoE on specific ports",
            "To configure trunk ports"
        ],
        answer: 1,
        explanation: "Port security limits the number of MAC addresses learned on a switch port and can take actions (shutdown, restrict, protect) when unauthorized MAC addresses are detected, mitigating MAC flooding attacks.",
        difficulty: "Medium",
        topic: "Port Security"
    },
    {
        id: "cn-136",
        question: "In a DNS zone file, what does the SOA record define?",
        options: [
            "The start of authority: primary name server, admin contact, serial number, and timing parameters",
            "The start of access: which IPs can query the zone",
            "The source of authentication: security keys for DNSSEC",
            "The service of availability: health check endpoints"
        ],
        answer: 0,
        explanation: "The SOA (Start of Authority) record defines the primary authoritative name server, the responsible person's email, the zone serial number, and timers for refresh, retry, expire, and minimum TTL.",
        difficulty: "Medium",
        topic: "DNS"
    },
    {
        id: "cn-137",
        question: "What does the 'tcpdump -i eth0 port 80' command capture?",
        options: [
            "All traffic on all interfaces",
            "Only TCP traffic on eth0",
            "Only traffic on port 80 (both TCP and UDP) on eth0",
            "Only HTTP response traffic on eth0"
        ],
        answer: 2,
        explanation: "The filter 'port 80' captures all traffic (TCP and UDP) using port 80 as source or destination on interface eth0. To capture only TCP, the filter would be 'tcp port 80'.",
        difficulty: "Medium",
        topic: "Tcpdump"
    },
    {
        id: "cn-138",
        question: "A network engineer notices that OSPF neighbors are not forming on a point-to-point link. Debug shows hello packets being sent but no replies. What is the most likely cause?",
        options: [
            "The link is using the wrong cable type",
            "OSPF hello/dead timers or subnet masks do not match on both ends",
            "The interfaces are in different areas but both are non-backbone",
            "The router IDs are identical"
        ],
        answer: 1,
        explanation: "OSPF requires matching hello and dead intervals, subnet masks (on broadcast networks), area IDs, authentication, and MTU. Mismatched timers are the most common cause of neighbor formation failure.",
        difficulty: "Medium",
        topic: "OSPF"
    },
    {
        id: "cn-139",
        question: "What is the maximum number of hosts that can be addressed with a /28 subnet?",
        options: [
            "14",
            "16",
            "30",
            "32"
        ],
        answer: 0,
        explanation: "A /28 subnet has 4 host bits, giving 2^4 = 16 total addresses. Subtracting the network and broadcast addresses leaves 14 usable host addresses.",
        difficulty: "Medium",
        topic: "Subnetting"
    },
    {
        id: "cn-140",
        question: "Which protocol is used by VoIP phones to set up, maintain, and terminate multimedia sessions?",
        options: [
            "RTP",
            "SIP",
            "H.323 only",
            "MGCP only"
        ],
        answer: 1,
        explanation: "SIP (Session Initiation Protocol) is the standard signaling protocol for establishing, modifying, and terminating VoIP calls. RTP carries the actual media (voice) streams separately.",
        difficulty: "Medium",
        topic: "SIP"
    },
    {
        id: "cn-141",
        question: "What is a MAC flooding attack and what does it target?",
        options: [
            "Flooding a server with TCP SYN packets",
            "Sending thousands of spoofed MAC addresses to overflow a switch's MAC table, forcing it into hub-like behavior",
            "Overwhelming a router's ARP cache",
            "Flooding a DNS server with queries"
        ],
        answer: 1,
        explanation: "MAC flooding exploits the limited size of a switch's MAC address table. By sending frames with random source MACs, the table fills up, causing the switch to flood frames to all ports like a hub.",
        difficulty: "Medium",
        topic: "Network Loops"
    },
    {
        id: "cn-142",
        question: "In WebSocket communication, what is the initial handshake mechanism?",
        options: [
            "It uses a separate TCP connection for the handshake",
            "It upgrades an HTTP connection to WebSocket via the Upgrade header",
            "It uses UDP for the handshake and TCP for data",
            "No handshake is required"
        ],
        answer: 1,
        explanation: "WebSocket starts with an HTTP request containing an 'Upgrade: websocket' header. If the server agrees, it responds with '101 Switching Protocols', and the same TCP connection is then used for bidirectional communication.",
        difficulty: "Medium",
        topic: "WebSockets"
    },
    {
        id: "cn-143",
        question: "What is the CIDR notation for the subnet mask 255.255.255.252?",
        options: [
            "/29",
            "/30",
            "/31",
            "/28"
        ],
        answer: 1,
        explanation: "255.255.255.252 in binary is 11111111.11111111.11111111.11111100, which has 30 ones, giving /30. This provides 2 usable host addresses, ideal for point-to-point links.",
        difficulty: "Medium",
        topic: "CIDR"
    },
    {
        id: "cn-144",
        question: "A Cloudflare customer enables 'Orange Cloud' for a DNS record. What does this do?",
        options: [
            "Enables DNSSEC for the record",
            "Routes traffic through Cloudflare's proxy for caching, DDoS protection, and performance optimization",
            "Changes the record to point to Cloudflare's origin servers",
            "Enables IPv6 resolution only"
        ],
        answer: 1,
        explanation: "The Orange Cloud icon in Cloudflare enables the proxy mode, routing traffic through Cloudflare's network for DDoS mitigation, WAF, caching, and performance features. Grey Cloud means DNS-only mode.",
        difficulty: "Medium",
        topic: "Cloudflare"
    },
    {
        id: "cn-145",
        question: "What is the difference between egress and ingress traffic in cloud networking?",
        options: [
            "Egress is inbound; Ingress is outbound",
            "Egress is outbound traffic leaving the network; Ingress is inbound traffic entering the network",
            "They are the same thing",
            "Egress is encrypted; Ingress is unencrypted"
        ],
        answer: 1,
        explanation: "In cloud networking, egress refers to data leaving a network or cloud environment (outbound), and ingress refers to data entering it (inbound). Cloud providers typically charge for egress bandwidth.",
        difficulty: "Medium",
        topic: "Egress"
    },
    {
        id: "cn-146",
        question: "Which Nmap flag performs a TCP SYN scan (half-open scan)?",
        options: [
            "-sT",
            "-sS",
            "-sU",
            "-sA"
        ],
        answer: 1,
        explanation: "The -sS flag performs a SYN scan, which sends a SYN packet and waits for a response. If SYN-ACK is received, the port is open. The connection is then reset with RST, never completing the full handshake.",
        difficulty: "Medium",
        topic: "Nmap Basics"
    },
    {
        id: "cn-147",
        question: "What is the purpose of the TCP delayed ACK mechanism?",
        options: [
            "To delay all acknowledgments indefinitely",
            "To reduce the number of ACKs by waiting briefly for a piggyback opportunity or accumulating data",
            "To slow down the sender intentionally",
            "To acknowledge retransmitted packets only"
        ],
        answer: 1,
        explanation: "Delayed ACK waits up to 200ms (or until a second segment arrives) before sending an ACK, allowing the receiver to piggyback the ACK on an outgoing data segment and reducing ACK overhead.",
        difficulty: "Medium",
        topic: "TCP"
    },
    {
        id: "cn-148",
        question: "In an SD-WAN deployment, what is the role of vEdge devices?",
        options: [
            "They are the central management controllers",
            "They are the physical or virtual edge routers that forward traffic and apply policies",
            "They are cloud-based firewalls",
            "They are DNS resolvers"
        ],
        answer: 1,
        explanation: "vEdge devices (or cEdge in Cisco SD-WAN) are the edge routers deployed at branch offices or data centers. They handle traffic forwarding, apply policies, and connect to multiple transport links under the controller's direction.",
        difficulty: "Medium",
        topic: "SD-WAN"
    },
    {
        id: "cn-149",
        question: "What does a DHCP relay agent do?",
        options: [
            "Relays DHCP traffic between two internet-connected routers",
            "Forwards DHCP broadcasts from clients on one subnet to a DHCP server on a different subnet",
            "Relays DNS queries to a DHCP server",
            "Caches DHCP leases for redundancy"
        ],
        answer: 1,
        explanation: "A DHCP relay agent (configured with 'ip helper-address' on Cisco) forwards DHCP broadcast packets as unicasts to a DHCP server on another subnet, since broadcasts don't cross router boundaries.",
        difficulty: "Medium",
        topic: "DHCP"
    },
    {
        id: "cn-150",
        question: "Which field in an OSPF LSAs is incremented each time the LSA is modified?",
        options: [
            "Age",
            "Sequence Number",
            "Checksum",
            "Link ID"
        ],
        answer: 1,
        explanation: "The LSA sequence number is incremented each time the LSA is modified, allowing OSPF routers to identify the most recent version of an LSA. Older versions are discarded.",
        difficulty: "Medium",
        topic: "OSPF"
    },
    {
        id: "cn-151",
        question: "What is the primary difference between a Layer 2 and a Layer 3 switch?",
        options: [
            "Layer 2 switches are faster",
            "Layer 3 switches can perform inter-VLAN routing using hardware acceleration; Layer 2 switches cannot",
            "Layer 3 switches do not support VLANs",
            "Layer 2 switches support PoE; Layer 3 switches do not"
        ],
        answer: 1,
        explanation: "A Layer 3 switch has hardware-based routing capabilities, enabling inter-VLAN routing at wire speed. A Layer 2 switch can only forward frames based on MAC addresses within the same VLAN.",
        difficulty: "Medium",
        topic: "Layer 3 Switch"
    },
    {
        id: "cn-152",
        question: "A traceroute from a Linux machine sends UDP packets by default. What does a Windows tracert use?",
        options: [
            "TCP SYN packets",
            "ICMP Echo Request packets",
            "UDP packets with incrementing ports",
            "GRE packets"
        ],
        answer: 1,
        explanation: "Windows tracert uses ICMP Echo Request packets with incrementing TTL values. Linux traceroute defaults to UDP packets (with high port numbers), though it can also use ICMP with the -I flag.",
        difficulty: "Medium",
        topic: "Traceroute vs Ping"
    },
    {
        id: "cn-153",
        question: "What is the significance of the BGP NEXT_HOP attribute?",
        options: [
            "It indicates the next BGP speaker in the AS_PATH",
            "It specifies the IP address of the next hop used to reach the destination",
            "It identifies the originating AS",
            "It points to the BGP route reflector"
        ],
        answer: 1,
        explanation: "The NEXT_HOP attribute specifies the next-hop IP address for reaching the destination network. For eBGP, it is typically the IP address of the advertising router's interface.",
        difficulty: "Medium",
        topic: "BGP"
    },
    {
        id: "cn-154",
        question: "In a REST API, which HTTP status code indicates that the server understood the request but refuses to authorize it?",
        options: [
            "400 Bad Request",
            "401 Unauthorized",
            "403 Forbidden",
            "404 Not Found"
        ],
        answer: 2,
        explanation: "403 Forbidden means the server understood the request and authenticated the client but refuses to authorize the action. 401 Unauthorized means authentication is required or has failed.",
        difficulty: "Medium",
        topic: "REST Networking Basics"
    },
    {
        id: "cn-155",
        question: "What is the purpose of IP fragmentation?",
        options: [
            "To compress IP packets for faster transmission",
            "To split a packet into smaller pieces when it exceeds the MTU of a downstream link",
            "To add encryption to each fragment",
            "To reorder out-of-sequence packets"
        ],
        answer: 1,
        explanation: "When an IP packet is larger than the MTU of the outgoing interface, it is fragmented into smaller packets. Each fragment has its own IP header with offset and MF (More Fragments) flag for reassembly.",
        difficulty: "Medium",
        topic: "Fragmentation"
    },
    {
        id: "cn-156",
        question: "Which Wireshark display filter shows all TCP retransmissions?",
        options: [
            "tcp.retransmission == true",
            "tcp.analysis.retransmission",
            "tcp.flags.reset == 1",
            "tcp.dup_ack"
        ],
        answer: 1,
        explanation: "The 'tcp.analysis.retransmission' filter in Wireshark identifies packets that the expert system has classified as retransmissions based on sequence number analysis.",
        difficulty: "Medium",
        topic: "Wireshark"
    },
    {
        id: "cn-157",
        question: "What is the difference between a stateful and stateless firewall?",
        options: [
            "Stateful firewalls only filter at Layer 3; stateless filter at Layer 7",
            "Stateful firewalls track connection state and allow return traffic automatically; stateless firewalls evaluate each packet independently",
            "Stateless firewalls are more secure",
            "There is no practical difference"
        ],
        answer: 1,
        explanation: "Stateful firewalls maintain a connection table and automatically allow return traffic for established connections. Stateless firewalls examine each packet against rules without context of prior packets.",
        difficulty: "Medium",
        topic: "Firewall"
    },
    {
        id: "cn-158",
        question: "In IPv6, which header field replaces the IPv4 TTL field?",
        options: [
            "Flow Label",
            "Hop Limit",
            "Next Header",
            "Payload Length"
        ],
        answer: 1,
        explanation: "The Hop Limit field in IPv6 serves the same purpose as TTL in IPv4: it is decremented by each router and the packet is discarded when it reaches zero, preventing infinite loops.",
        difficulty: "Medium",
        topic: "IPv6"
    },
    {
        id: "cn-159",
        question: "A network admin sees the message '%SPANTREE-2-BLOCK_BPDUGUARD' on a switch port. What happened?",
        options: [
            "The port received a BPDU and was shut down because BPDU Guard is enabled",
            "The port stopped sending BPDUs due to a configuration error",
            "STP converged and blocked the port normally",
            "The port was configured as a trunk incorrectly"
        ],
        answer: 0,
        explanation: "BPDU Guard shuts down a port if it receives any BPDU, which should not happen on a portfast-enabled access port. This indicates a rogue switch or bridge was connected to that port.",
        difficulty: "Medium",
        topic: "STP"
    },
    {
        id: "cn-160",
        question: "What is the purpose of the DHCP Option 82 (Relay Agent Information)?",
        options: [
            "To encrypt DHCP messages",
            "To insert switch port and circuit ID information into DHCP requests for tracking and policy enforcement",
            "To specify the DNS server address",
            "To set the lease time"
        ],
        answer: 1,
        explanation: "Option 82 allows a DHCP relay agent (typically a switch) to add information about the port and circuit where the request originated. This helps the DHCP server make policy decisions and track devices.",
        difficulty: "Medium",
        topic: "DHCP"
    },
    {
        id: "cn-161",
        question: "Which protocol does an IPSec VPN use for data integrity and origin authentication?",
        options: [
            "ESP only",
            "AH (Authentication Header)",
            "IKE Phase 1",
            "L2TP"
        ],
        answer: 1,
        explanation: "AH (Authentication Header) provides data integrity, origin authentication, and anti-replay services for the entire IP packet. ESP provides these plus confidentiality (encryption) but not for the outer IP header.",
        difficulty: "Medium",
        topic: "VPN"
    },
    {
        id: "cn-162",
        question: "What is the difference between bandwidth and throughput?",
        options: [
            "They are identical concepts",
            "Bandwidth is the theoretical maximum capacity; throughput is the actual amount of data successfully transmitted",
            "Throughput is always higher than bandwidth",
            "Bandwidth applies to wireless; throughput applies to wired"
        ],
        answer: 1,
        explanation: "Bandwidth is the maximum theoretical data transfer rate of a link. Throughput is the actual achieved transfer rate, which is typically lower due to protocol overhead, congestion, errors, and other factors.",
        difficulty: "Medium",
        topic: "Bandwidth"
    },
    {
        id: "cn-163",
        question: "In Docker bridge networking, how do containers on the same bridge network communicate?",
        options: [
            "Via the host's public IP address",
            "Directly using container names as hostnames via Docker's embedded DNS",
            "Through a NAT gateway",
            "Using MAC addresses only"
        ],
        answer: 1,
        explanation: "Docker's embedded DNS resolver allows containers on the same custom bridge network to resolve each other's container names to IP addresses, enabling name-based communication.",
        difficulty: "Medium",
        topic: "Docker Networking"
    },
    {
        id: "cn-164",
        question: "What is a DNS amplification attack?",
        options: [
            "Modifying DNS responses to redirect traffic",
            "Sending small DNS queries with a spoofed source IP to open resolvers, generating large responses that flood the victim",
            "Overwhelming a DNS server with queries",
            "Injecting false records into a DNS cache"
        ],
        answer: 1,
        explanation: "In a DNS amplification attack, the attacker sends small queries with the victim's spoofed IP to open DNS resolvers. The resolvers send large responses to the victim, amplifying the attack volume.",
        difficulty: "Medium",
        topic: "DDoS"
    },
    {
        id: "cn-165",
        question: "Which metric does RIP use to determine the best path?",
        options: [
            "Bandwidth and delay",
            "Hop count",
            "Cost based on interface bandwidth",
            "Composite metric"
        ],
        answer: 1,
        explanation: "RIP uses hop count as its sole metric. The maximum hop count is 15 (16 is considered unreachable), which limits RIP's suitability for large networks.",
        difficulty: "Medium",
        topic: "RIP"
    },
    {
        id: "cn-166",
        question: "What is jitter in network terminology?",
        options: [
            "The total time a packet takes to reach its destination",
            "The variation in packet arrival times (delay variance)",
            "The percentage of packets lost in transit",
            "The maximum bandwidth available on a link"
        ],
        answer: 1,
        explanation: "Jitter is the variation in the delay of received packets. High jitter causes uneven packet arrival, which is particularly problematic for real-time applications like VoIP and video conferencing.",
        difficulty: "Medium",
        topic: "Jitter"
    },
    {
        id: "cn-167",
        question: "A network has two equal-cost paths to a destination via OSPF. How will traffic be distributed?",
        options: [
            "All traffic uses the first learned path",
            "Traffic is load-balanced across both paths using per-destination hashing by default",
            "OSPF picks the path with the lower router ID",
            "Traffic alternates packet-by-packet between paths"
        ],
        answer: 1,
        explanation: "OSPF supports equal-cost multi-path (ECMP) routing. By default, Cisco routers use per-destination load balancing (CEF), where all packets for a given destination use the same path.",
        difficulty: "Medium",
        topic: "OSPF"
    },
    {
        id: "cn-168",
        question: "What is the function of the ARP probe packet in IPv4 address conflict detection?",
        options: [
            "To discover the MAC address of the default gateway",
            "To check if another host is already using the same IP address before assigning it",
            "To broadcast the host's MAC address to all devices",
            "To resolve the IP address of the DNS server"
        ],
        answer: 1,
        explanation: "Before using a configured IP address (especially via DHCP), a host sends ARP probes (ARP requests with a sender IP of 0.0.0.0) to detect if another device is already using that IP address.",
        difficulty: "Medium",
        topic: "ARP"
    },
    {
        id: "cn-169",
        question: "Which VPN type creates a virtual network adapter on the client and routes all client traffic through the VPN tunnel?",
        options: [
            "SSL VPN (clientless)",
            "Full tunnel VPN",
            "Split tunnel VPN",
            "Site-to-site VPN"
        ],
        answer: 1,
        explanation: "A full tunnel VPN routes all client traffic (including internet traffic) through the VPN gateway. In contrast, a split tunnel VPN only routes traffic destined for the corporate network through the VPN.",
        difficulty: "Medium",
        topic: "VPN"
    },
    {
        id: "cn-170",
        question: "What does the 'show ip interface brief' command display on a Cisco device?",
        options: [
            "Detailed OSPF interface configuration",
            "A summary of all interfaces with their IP addresses, status, and protocol status",
            "The complete running configuration",
            "MAC address table entries"
        ],
        answer: 1,
        explanation: "'show ip interface brief' provides a concise table showing each interface's IP address, operational status (up/down), and line protocol status, making it useful for quick interface health checks.",
        difficulty: "Medium",
        topic: "Network Monitoring"
    },
    {
        id: "cn-171",
        question: "In network virtualization, what is a VXLAN used for?",
        options: [
            "To encrypt traffic between virtual machines",
            "To encapsulate Layer 2 frames in Layer 4 UDP packets, enabling Layer 2 connectivity across Layer 3 networks",
            "To provide load balancing for VM traffic",
            "To replace VLAN tagging"
        ],
        answer: 1,
        explanation: "VXLAN (Virtual eXtensible LAN) encapsulates Ethernet frames in UDP packets with a 24-bit VNID, supporting up to 16 million virtual networks compared to VLAN's 4094 limit, across IP networks.",
        difficulty: "Medium",
        topic: "Network Virtualization"
    },
    {
        id: "cn-172",
        question: "What is a man-in-the-middle (MITM) attack in the context of networking?",
        options: [
            "A DDoS attack that overwhelms a middle proxy",
            "An attack where the attacker intercepts and potentially alters communication between two parties without their knowledge",
            "An attack that targets intermediate routers",
            "A physical attack on network cables"
        ],
        answer: 1,
        explanation: "In a MITM attack, the attacker positions themselves between two communicating parties, intercepting and possibly modifying the traffic. ARP poisoning is a common technique to achieve this on LANs.",
        difficulty: "Medium",
        topic: "MITM"
    },
    {
        id: "cn-173",
        question: "Which OSPF LSA type describes a route to a network outside the OSPF domain?",
        options: [
            "Type 1 (Router LSA)",
            "Type 2 (Network LSA)",
            "Type 3 (Summary LSA)",
            "Type 5 (External LSA)"
        ],
        answer: 3,
        explanation: "Type 5 LSAs carry external route information redistributed into OSPF from other routing protocols or static routes. They are flooded throughout all non-stub areas.",
        difficulty: "Medium",
        topic: "OSPF"
    },
    {
        id: "cn-174",
        question: "What is reverse DNS (rDNS) used for?",
        options: [
            "To speed up DNS resolution",
            "To resolve an IP address to a domain name",
            "To provide DNS failover",
            "To cache DNS responses in reverse order"
        ],
        answer: 1,
        explanation: "Reverse DNS maps an IP address back to a domain name using PTR records in the in-addr.arpa zone (for IPv4). It is commonly used for email verification and logging.",
        difficulty: "Medium",
        topic: "Reverse DNS"
    },
    {
        id: "cn-175",
        question: "When a TCP sender detects congestion through packet loss, what does TCP Reno do differently from TCP Tahoe?",
        options: [
            "TCP Reno sets cwnd to 1 MSS; Tahoe sets it to half",
            "TCP Reno performs fast recovery (halving cwnd but not resetting to 1 MSS); Tahoe resets cwnd to 1 MSS",
            "TCP Reno uses slow start; Tahoe uses fast retransmit",
            "There is no difference"
        ],
        answer: 1,
        explanation: "Both detect loss via triple duplicate ACKs and perform fast retransmit. But TCP Reno enters fast recovery (cwnd = cwnd/2 + 3 MSS), while TCP Tahoe enters slow start (cwnd = 1 MSS).",
        difficulty: "Medium",
        topic: "Congestion Control"
    },
    {
        id: "cn-176",
        question: "What is the function of the 'debug ip packet' command on a Cisco router?",
        options: [
            "To capture full packet contents",
            "To display real-time information about IP packets being processed by the router",
            "To filter packets based on ACL",
            "To show routing protocol updates"
        ],
        answer: 1,
        explanation: "'debug ip packet' shows real-time IP packet processing events including source/destination addresses and routing decisions. It should be used cautiously as it can generate high CPU load.",
        difficulty: "Medium",
        topic: "Packet Capture"
    },
    {
        id: "cn-177",
        question: "Which Kubernetes CNI plugin is the default in most Kubernetes distributions and creates a bridge on each node?",
        options: [
            "Calico",
            "Flannel",
            "Cilium",
            "Weave Net"
        ],
        answer: 1,
        explanation: "Flannel is a simple and commonly used CNI that creates a flat network by allocating a subnet per node and using a bridge (cni0) on each node. It supports VXLAN, host-gw, and other backends.",
        difficulty: "Medium",
        topic: "Kubernetes Networking"
    },
    {
        id: "cn-178",
        question: "What is the difference between symmetric and asymmetric encryption in the context of TLS?",
        options: [
            "TLS uses only symmetric encryption",
            "TLS uses asymmetric encryption for key exchange and symmetric encryption for bulk data transfer",
            "TLS uses only asymmetric encryption",
            "TLS uses symmetric encryption for key exchange and asymmetric for data"
        ],
        answer: 1,
        explanation: "TLS uses asymmetric encryption (e.g., RSA, ECDHE) during the handshake to securely exchange a session key, then uses symmetric encryption (e.g., AES) for fast bulk data encryption.",
        difficulty: "Medium",
        topic: "TLS"
    },
    {
        id: "cn-179",
        question: "A router receives a packet with the DF (Don't Fragment) flag set, but the packet exceeds the outgoing interface's MTU. What happens?",
        options: [
            "The router fragments the packet anyway",
            "The router drops the packet and sends an ICMP 'Fragmentation Needed' message back to the source",
            "The router forwards the packet without fragmentation",
            "The router reduces the packet size by removing the IP options field"
        ],
        answer: 1,
        explanation: "When the DF flag is set and the packet is too large for the outgoing MTU, the router cannot fragment it. It drops the packet and sends an ICMP Type 3 Code 4 (Fragmentation Needed) message to the source.",
        difficulty: "Medium",
        topic: "Fragmentation"
    },
    {
        id: "cn-180",
        question: "What is a BGP route reflector used for?",
        options: [
            "To reflect BGP routes to eBGP peers only",
            "To reduce the number of iBGP full-mesh connections in an AS by allowing certain routers to propagate iBGP routes",
            "To reflect routes between different ASes",
            "To load balance BGP traffic"
        ],
        answer: 1,
        explanation: "In a full iBGP mesh, n routers require n(n-1)/2 peerings. Route reflectors eliminate this by allowing iBGP routes learned from one client to be reflected to other clients, reducing the mesh complexity.",
        difficulty: "Medium",
        topic: "BGP"
    },
    {
        id: "cn-181",
        question: "What is the default OSPF cost of a 1 Gbps Ethernet interface on a Cisco router?",
        options: [
            "1",
            "10",
            "100",
            "1000"
        ],
        answer: 0,
        explanation: "Cisco calculates OSPF cost as 100 Mbps / interface bandwidth in Mbps. For 1 Gbps: 100/1000 = 0.1, which is rounded to 1. The 'auto-cost reference-bandwidth' command can change the reference.",
        difficulty: "Medium",
        topic: "OSPF"
    },
    {
        id: "cn-182",
        question: "What is the difference between a proxy and a NAT device?",
        options: [
            "They are functionally identical",
            "A proxy operates at the application layer and understands the protocol; NAT operates at the network layer translating IP addresses",
            "NAT operates at the application layer; proxy at the network layer",
            "A proxy only works for HTTP"
        ],
        answer: 1,
        explanation: "A proxy server intercepts application-layer traffic, understands the protocol, and makes requests on behalf of clients. NAT translates network-layer addresses transparently without understanding the application protocol.",
        difficulty: "Medium",
        topic: "Proxy Servers"
    },
    {
        id: "cn-183",
        question: "In a ring topology with a single failure point, what happens when one node fails?",
        options: [
            "Only the failed node is affected",
            "The entire network goes down because the ring is broken",
            "Traffic automatically reroutes in the opposite direction",
            "The failed node's neighbors take over its functions"
        ],
        answer: 1,
        explanation: "In a basic ring topology, data travels in one direction around the ring. If a node or link fails, the ring is broken and the entire network loses connectivity unless a dual-ring or fault-tolerance mechanism is in place.",
        difficulty: "Medium",
        topic: "Ring"
    },
    {
        id: "cn-184",
        question: "What does the 'no auto-summary' command do in EIGRP configuration?",
        options: [
            "Disables EIGRP entirely",
            "Prevents EIGRP from summarizing networks at classful boundaries",
            "Disables automatic route redistribution",
            "Removes all EIGRP neighbors"
        ],
        answer: 1,
        explanation: "By default, EIGRP summarizes routes at classful network boundaries. 'no auto-summary' disables this behavior, allowing EIGRP to advertise subnetted networks with their actual masks.",
        difficulty: "Medium",
        topic: "EIGRP"
    },
    {
        id: "cn-185",
        question: "What is the purpose of HTTP/2 multiplexing?",
        options: [
            "To open multiple TCP connections for a single page load",
            "To allow multiple requests and responses to be sent concurrently over a single TCP connection",
            "To compress HTTP headers using GZIP",
            "To push resources to the client before they are requested"
        ],
        answer: 1,
        explanation: "HTTP/2 multiplexing uses a single TCP connection to send multiple streams of requests and responses concurrently, eliminating head-of-line blocking that occurred with HTTP/1.1 pipelining.",
        difficulty: "Medium",
        topic: "HTTP"
    },
    {
        id: "cn-186",
        question: "Which IoT networking protocol is designed for constrained devices with low power and limited bandwidth, operating over UDP?",
        options: [
            "MQTT",
            "CoAP",
            "AMQP",
            "HTTP/2"
        ],
        answer: 1,
        explanation: "CoAP (Constrained Application Protocol) is designed for resource-constrained IoT devices. It uses UDP, supports REST-like methods (GET, POST, PUT, DELETE), and includes features like observe for notifications.",
        difficulty: "Medium",
        topic: "IoT Networking"
    },
    {
        id: "cn-187",
        question: "What is the purpose of the BGP LOCAL_PREF attribute?",
        options: [
            "To influence outbound traffic from the local AS",
            "To influence inbound traffic by telling other ASes which path to prefer",
            "To set the priority of BGP updates within the local AS",
            "To influence the outbound path selection by preferring one exit point over another within the local AS"
        ],
        answer: 3,
        explanation: "LOCAL_PREF is a well-known discretionary attribute that is exchanged only within an AS. A higher LOCAL_PREF makes a route more preferred for outbound traffic, influencing which exit point the AS uses.",
        difficulty: "Medium",
        topic: "BGP"
    },
    {
        id: "cn-188",
        question: "In a tree topology, what is the role of the root node?",
        options: [
            "It provides internet connectivity",
            "It is the central hub that connects and manages all lower-level nodes",
            "It acts as a firewall",
            "It is just another leaf node"
        ],
        answer: 1,
        explanation: "In a tree topology, the root node is the top-level hierarchy node that connects to second-level nodes, which in turn connect to lower levels. All traffic between branches must pass through the root or higher-level nodes.",
        difficulty: "Medium",
        topic: "Tree"
    },
    {
        id: "cn-189",
        question: "What is the difference between a standard and extended ACL on a Cisco router?",
        options: [
            "Standard ACLs filter on source IP only; extended ACLs can filter on source/destination IP, protocol, and port",
            "Standard ACLs are faster; extended are slower",
            "Standard ACLs use numbers 100-199; extended use 1-99",
            "There is no difference in filtering capability"
        ],
        answer: 0,
        explanation: "Standard ACLs (1-99, 1300-1999) can only filter based on source IP address. Extended ACLs (100-199, 2000-2699) can filter on source/destination IP, protocol type, and port numbers.",
        difficulty: "Medium",
        topic: "ACL"
    },
    {
        id: "cn-190",
        question: "What is the purpose of RTP in a VoIP deployment?",
        options: [
            "To set up and tear down calls",
            "To carry the actual voice media packets with timing and sequence information",
            "To compress voice data",
            "To encrypt voice calls"
        ],
        answer: 1,
        explanation: "RTP (Real-time Transport Protocol) carries the actual voice or video media streams. It includes sequence numbers for packet ordering and timestamps for playback synchronization. RTCP provides QoS feedback.",
        difficulty: "Medium",
        topic: "RTP"
    },
    {
        id: "cn-191",
        question: "A network engineer observes that a router's CPU is at 95% and 'show processes cpu' indicates the IP Input process is consuming the most resources. What is the most likely cause?",
        options: [
            "Too many OSPF neighbors",
            "Process-switched packets due to features not supported by CEF",
            "High BGP table size",
            "Excessive SNMP polling"
        ],
        answer: 1,
        explanation: "When packets cannot be forwarded by CEF (Cisco Express Forwarding) due to features like policy routing, NAT, or ACL logging, they fall back to process switching, which uses the CPU-intensive IP Input process.",
        difficulty: "Medium",
        topic: "Network Troubleshooting"
    },
    {
        id: "cn-192",
        question: "What does the HTTP 'If-None-Match' header work with for conditional requests?",
        options: [
            "Last-Modified timestamp",
            "ETag value",
            "Content-Length",
            "Cache-Control"
        ],
        answer: 1,
        explanation: "The If-None-Match header sends the previously received ETag value. If the server's current ETag matches, it returns 304 Not Modified, saving bandwidth by not re-sending unchanged content.",
        difficulty: "Medium",
        topic: "HTTP"
    },
    {
        id: "cn-193",
        question: "In AWS, what is the difference between an Internet Gateway and a NAT Gateway?",
        options: [
            "They serve the same purpose",
            "An Internet Gateway allows bidirectional communication; a NAT Gateway allows private resources to access the internet but prevents inbound initiation",
            "A NAT Gateway is free; an Internet Gateway costs money",
            "An Internet Gateway works at Layer 2; NAT Gateway at Layer 3"
        ],
        answer: 1,
        explanation: "An Internet Gateway allows resources with public IPs to communicate bidirectionally with the internet. A NAT Gateway allows resources in private subnets to initiate outbound connections without public IPs.",
        difficulty: "Medium",
        topic: "AWS Networking Basics"
    },
    {
        id: "cn-194",
        question: "What is the purpose of the TCP TIME_WAIT state?",
        options: [
            "To speed up connection establishment for new connections",
            "To ensure that delayed segments from the old connection are discarded before reusing the same port pair",
            "To indicate the connection is being actively used",
            "To buffer data for retransmission"
        ],
        answer: 1,
        explanation: "TIME_WAIT lasts for 2×MSL (Maximum Segment Lifetime, typically 60 seconds) to ensure any delayed or duplicate segments from the closed connection expire before the same port pair is reused.",
        difficulty: "Medium",
        topic: "TCP Termination"
    },
    {
        id: "cn-195",
        question: "Which wireless security protocol is considered insecure and should not be used?",
        options: [
            "WPA2-Enterprise",
            "WPA3-Personal",
            "WEP",
            "WPA2-Personal"
        ],
        answer: 2,
        explanation: "WEP (Wired Equivalent Privacy) uses a weak RC4 encryption with a short key that can be cracked within minutes. WPA2 and WPA3 use much stronger encryption (AES) and should be used instead.",
        difficulty: "Medium",
        topic: "Network Security"
    },
    {
        id: "cn-196",
        question: "What is the function of the 'spanning-tree vlan 10 root primary' command?",
        options: [
            "It makes the switch the root bridge for VLAN 10 by lowering its bridge priority",
            "It designates the port as a root port for VLAN 10",
            "It puts VLAN 10 into root guard mode",
            "It creates VLAN 10 as the root VLAN"
        ],
        answer: 0,
        explanation: "This command automatically lowers the switch's bridge priority for VLAN 10 to a value lower than the current root bridge, making this switch the new root bridge for that VLAN.",
        difficulty: "Medium",
        topic: "STP"
    },
    {
        id: "cn-197",
        question: "What is the difference between packet switching and circuit switching in terms of resource allocation?",
        options: [
            "Both allocate dedicated resources for the entire session",
            "Circuit switching dedicates resources for the entire session; packet switching shares resources among multiple flows",
            "Packet switching dedicates resources; circuit switching shares them",
            "Neither allocates any resources"
        ],
        answer: 1,
        explanation: "Circuit switching reserves a fixed bandwidth path for the entire session, even during silent periods. Packet switching dynamically shares bandwidth among all active flows, using resources only when data is sent.",
        difficulty: "Medium",
        topic: "Packet Switching"
    },
    {
        id: "cn-198",
        question: "In a hybrid topology, which statement best describes its structure?",
        options: [
            "All devices connect to a single central node",
            "It combines two or more different topology types to meet specific network requirements",
            "Devices are connected in a circular chain",
            "Every device connects to every other device"
        ],
        answer: 1,
        explanation: "A hybrid topology combines elements of different topologies (e.g., a star backbone with bus segments) to leverage the advantages of each while mitigating their individual weaknesses.",
        difficulty: "Medium",
        topic: "Hybrid"
    },
    {
        id: "cn-199",
        question: "What is a DHCP starvation attack?",
        options: [
            "Sending malformed DHCP packets to crash the server",
            "Flooding the network with DHCP Discover messages using spoofed MAC addresses to exhaust the IP address pool",
            "Continuously renewing DHCP leases to prevent other clients from getting addresses",
            "Sending DHCP Release messages for other clients"
        ],
        answer: 1,
        explanation: "In a DHCP starvation attack, the attacker sends thousands of DHCP Discover messages with fake MAC addresses, depleting the server's available IP pool and preventing legitimate clients from obtaining addresses.",
        difficulty: "Medium",
        topic: "Network Security"
    },
    {
        id: "cn-200",
        question: "What does the CRC (Cyclic Redundancy Check) detect in an Ethernet frame?",
        options: [
            "Only single-bit errors",
            "Bit errors, burst errors, and frame corruption during transmission",
            "Duplicate frames",
            "Out-of-order frames"
        ],
        answer: 1,
        explanation: "CRC uses polynomial division to detect bit errors, burst errors, and other forms of frame corruption. The FCS field contains the CRC value, and the receiver recalculates it to verify frame integrity.",
        difficulty: "Medium",
        topic: "CRC"
    },
    {
        id: "cn-201",
        question: "What is the purpose of the STP root guard feature?",
        options: [
            "To protect the root bridge from being compromised",
            "To prevent a switch from becoming the root bridge by blocking ports that receive superior BPDUs",
            "To guard against BPDU flooding attacks",
            "To protect root ports from being disabled"
        ],
        answer: 1,
        explanation: "Root guard is placed on designated ports to prevent an unauthorized switch from becoming the root bridge. If a superior BPDU is received on a root-guard-enabled port, the port is placed in a root-inconsistent state.",
        difficulty: "Medium",
        topic: "STP"
    },
    {
        id: "cn-202",
        question: "In a Docker overlay network, how is traffic between containers on different hosts encapsulated?",
        options: [
            "Using GRE tunneling",
            "Using VXLAN encapsulation",
            "Using IPsec",
            "Using MPLS labels"
        ],
        answer: 1,
        explanation: "Docker overlay networks use VXLAN encapsulation to enable container-to-container communication across multiple Docker daemon hosts. Each host runs a VXLAN endpoint that encapsulates and decapsulates traffic.",
        difficulty: "Medium",
        topic: "Containers Networking"
    },
    {
        id: "cn-203",
        question: "What is the key advantage of using an anycast address for DNS services like 8.8.8.8?",
        options: [
            "It provides encryption for DNS queries",
            "It routes users to the nearest Google DNS server, reducing latency",
            "It provides redundancy through multiple DNS records",
            "It caches DNS responses locally"
        ],
        answer: 1,
        explanation: "Google's 8.8.8.8 uses anycast routing, meaning the same IP address is advertised from multiple locations worldwide. BGP routes the user's query to the topologically nearest server, minimizing latency.",
        difficulty: "Medium",
        topic: "Anycast"
    },
    {
        id: "cn-204",
        question: "What is a WLAN controller in enterprise wireless networking?",
        options: [
            "A device that controls the RF signal strength",
            "A centralized device that manages multiple access points, handles roaming, and enforces security policies",
            "A firewall for wireless networks",
            "A DNS server for wireless clients"
        ],
        answer: 1,
        explanation: "A WLAN controller (WLC) centrally manages lightweight access points (LWAPs), handling configuration, firmware updates, RF management, client roaming between APs, and security policy enforcement.",
        difficulty: "Medium",
        topic: "Wireless Access Point"
    },
    {
        id: "cn-205",
        question: "What is the difference between latency and propagation delay?",
        options: [
            "They are the same thing",
            "Propagation delay is the time for a signal to travel through the medium; latency includes propagation plus processing, queuing, and transmission delays",
            "Latency only applies to wireless networks",
            "Propagation delay is always higher than latency"
        ],
        answer: 1,
        explanation: "Propagation delay is the physical time for a bit to travel across the medium. Latency (or total delay) includes propagation delay plus transmission, processing, and queuing delays at each hop.",
        difficulty: "Medium",
        topic: "Latency"
    },
    {
        id: "cn-206",
        question: "Which command verifies that a specific ACL is applied to an interface on a Cisco router?",
        options: [
            "show access-lists",
            "show ip interface",
            "show running-config | section interface",
            "Both show ip interface and show running-config can verify this"
        ],
        answer: 3,
        explanation: "Both 'show ip interface' displays which ACLs are applied to which interface and in which direction, and 'show running-config' shows the actual ACL application commands under the interface configuration.",
        difficulty: "Medium",
        topic: "ACL"
    },
    {
        id: "cn-207",
        question: "What is the difference between an IPSec tunnel mode and transport mode?",
        options: [
            "Tunnel mode encrypts only the payload; transport mode encrypts the entire packet",
            "Tunnel mode encapsulates the entire original IP packet in a new IP header; transport mode encrypts only the payload keeping the original IP header",
            "Transport mode is used for site-to-site VPNs; tunnel mode for remote access",
            "There is no difference"
        ],
        answer: 1,
        explanation: "In tunnel mode, the entire original IP packet is encrypted and wrapped in a new outer IP header, hiding the original source and destination. In transport mode, only the payload is encrypted, leaving the original IP header visible.",
        difficulty: "Medium",
        topic: "VPN"
    },
    {
        id: "cn-208",
        question: "A network uses 802.1X for port-based authentication. What are the three roles in this framework?",
        options: [
            "Client, Server, Router",
            "Supplicant, Authenticator, Authentication Server",
            "Initiator, Responder, Validator",
            "Sender, Receiver, Forwarder"
        ],
        answer: 1,
        explanation: "802.1X involves a Supplicant (the client seeking access), an Authenticator (the switch or AP that controls port access), and an Authentication Server (typically a RADIUS server that verifies credentials).",
        difficulty: "Medium",
        topic: "Network Security"
    },
    {
        id: "cn-209",
        question: "What is the significance of the EIGRP feasible distance (FD) and reported distance (RD)?",
        options: [
            "FD is the cost to the neighbor; RD is the cost from the neighbor to the destination",
            "FD is the total cost to the destination via a particular path; RD is the neighbor's cost to that destination",
            "FD and RD are always equal",
            "RD is the total cost; FD is the backup cost"
        ],
        answer: 1,
        explanation: "The Reported Distance (RD) is the neighbor's metric to reach the destination. The Feasible Distance (FD) is the total metric from the local router to the destination via that neighbor (local cost + RD).",
        difficulty: "Medium",
        topic: "EIGRP"
    },
    {
        id: "cn-210",
        question: "What does the term 'hairpinning' refer to in NAT configuration?",
        options: [
            "NAT loopback where internal hosts access an internal server using its public IP address",
            "NAT failing to translate return traffic",
            "Port forwarding from external to internal",
            "NAT overload failing due to port exhaustion"
        ],
        answer: 0,
        explanation: "Hairpinning (NAT loopback) occurs when an internal host tries to reach an internal server using the server's public (external) IP address. The NAT device must translate both the source and destination to route the traffic internally.",
        difficulty: "Medium",
        topic: "NAT"
    },
    {
        id: "cn-211",
        question: "In 5G networking, what is network slicing?",
        options: [
            "Dividing the radio spectrum into smaller channels",
            "Creating multiple virtual networks on a shared physical infrastructure, each optimized for specific use cases",
            "Slicing packets into smaller fragments",
            "Distributing users across multiple cell towers"
        ],
        answer: 1,
        explanation: "Network slicing creates multiple independent virtual networks on the same 5G infrastructure, each with customized QoS, latency, bandwidth, and security characteristics for different applications (e.g., IoT, URLLC, eMBB).",
        difficulty: "Medium",
        topic: "5G Networking"
    },
    {
        id: "cn-212",
        question: "What is the purpose of the LDAP protocol in an enterprise network?",
        options: [
            "To transfer files between servers",
            "To provide centralized directory services for authentication and authorization lookups",
            "To monitor network device health",
            "To route packets between subnets"
        ],
        answer: 1,
        explanation: "LDAP (Lightweight Directory Access Protocol) provides access to a centralized directory service (like Active Directory) for user authentication, authorization, and information lookups across the enterprise.",
        difficulty: "Medium",
        topic: "LDAP"
    },
    {
        id: "cn-213",
        question: "What is the primary difference between POP3 and IMAP regarding message storage?",
        options: [
            "POP3 stores messages on the server; IMAP downloads them",
            "POP3 typically downloads and removes messages from the server; IMAP keeps messages on the server and allows folder management",
            "IMAP only works with webmail",
            "POP3 is more secure than IMAP"
        ],
        answer: 1,
        explanation: "POP3 by default downloads messages to the client and removes them from the server. IMAP keeps messages on the server, allowing access from multiple devices and supporting server-side folder management.",
        difficulty: "Medium",
        topic: "POP3"
    },
    {
        id: "cn-214",
        question: "What is the difference between checksum and CRC in terms of error detection capability?",
        options: [
            "They detect exactly the same errors",
            "CRC uses polynomial division and detects more error patterns including burst errors; checksum uses simple addition and misses some error patterns",
            "Checksum is stronger than CRC",
            "CRC only detects single-bit errors"
        ],
        answer: 1,
        explanation: "CRC uses polynomial division over the entire frame, making it effective at detecting burst errors, multiple-bit errors, and most common error patterns. Simple additive checksums can miss certain error combinations.",
        difficulty: "Medium",
        topic: "Checksum"
    },
    {
        id: "cn-215",
        question: "What is the purpose of a default route (0.0.0.0/0) in a routing table?",
        options: [
            "To route traffic to the loopback interface",
            "To serve as a catch-all for destinations not matching any more specific route",
            "To block all unroutable traffic",
            "To prioritize certain traffic over others"
        ],
        answer: 1,
        explanation: "A default route matches any destination IP address (since 0.0.0.0/0 has the shortest prefix length). It acts as a last-resort path, typically pointing to an ISP's router for internet-bound traffic.",
        difficulty: "Medium",
        topic: "Default Route"
    },
    {
        id: "cn-216",
        question: "In Wireshark, what does the TCP 'Window Full' analysis flag indicate?",
        options: [
            "The connection has been closed",
            "The sender has filled the receiver's advertised window and must wait for an ACK before sending more data",
            "The TCP window size is set to zero permanently",
            "The receiver's buffer is empty"
        ],
        answer: 1,
        explanation: "When the sender's data in flight equals the receiver's advertised window, the window is 'full'. The sender must wait for the receiver to send an ACK (which opens the window) before transmitting more data.",
        difficulty: "Medium",
        topic: "Flow Control"
    },
    {
        id: "cn-217",
        question: "What is the difference between a forward proxy and a reverse proxy in terms of client awareness?",
        options: [
            "Clients are unaware of both types",
            "Clients configure and are aware of a forward proxy; clients typically do not know about a reverse proxy",
            "Clients are aware of a reverse proxy but not a forward proxy",
            "There is no difference in client awareness"
        ],
        answer: 1,
        explanation: "A forward proxy requires client configuration (browser proxy settings) since clients explicitly send requests through it. A reverse proxy sits transparently in front of servers; clients connect to what appears to be the server directly.",
        difficulty: "Medium",
        topic: "Proxy Servers"
    },
    {
        id: "cn-218",
        question: "What is the role of the DHCP Option 150 in a Cisco VoIP deployment?",
        options: [
            "To specify the TFTP server address for IP phone firmware and configuration downloads",
            "To set the VLAN for voice traffic",
            "To configure the default gateway for phones",
            "To specify the NTP server for time synchronization"
        ],
        answer: 0,
        explanation: "DHCP Option 150 specifies the TFTP server IP address that Cisco IP phones use to download their configuration files and firmware. This is critical for phone provisioning in a Cisco Unified Communications environment.",
        difficulty: "Medium",
        topic: "VoIP"
    },
    {
        id: "cn-219",
        question: "What is a VPN Gateway in cloud networking?",
        options: [
            "A regular internet router",
            "A managed cloud service that provides encrypted connectivity between a cloud virtual network and an on-premises network",
            "A DNS server in the cloud",
            "A load balancer for VPN traffic"
        ],
        answer: 1,
        explanation: "A cloud VPN Gateway (like AWS VPN Gateway or Azure VPN Gateway) is a managed service that establishes IPsec VPN tunnels between the cloud VNet/VPC and on-premises networks for secure hybrid connectivity.",
        difficulty: "Medium",
        topic: "VPN Gateway"
    },
    {
        id: "cn-220",
        question: "What is ARP poisoning and what is its primary objective?",
        options: [
            "Sending excessive ARP requests to exhaust the ARP cache",
            "Sending forged ARP replies to associate the attacker's MAC with a legitimate IP, enabling man-in-the-middle attacks",
            "Deleting ARP entries from a switch's MAC table",
            "Modifying ARP packets to bypass firewall rules"
        ],
        answer: 1,
        explanation: "ARP poisoning involves sending forged ARP replies to trick a target device into associating the attacker's MAC address with the IP of another device (like the gateway), redirecting traffic through the attacker for interception.",
        difficulty: "Medium",
        topic: "ARP Poisoning"
    },
    {
        id: "cn-221",
        question: "What is the purpose of forward error correction (FEC) in network transmission?",
        options: [
            "To retransmit corrupted packets",
            "To add redundant data to the transmitted signal so the receiver can detect and correct errors without retransmission",
            "To compress data for faster transmission",
            "To encrypt data during transmission"
        ],
        answer: 1,
        explanation: "FEC adds mathematical redundancy to the transmitted data, enabling the receiver to detect and correct certain errors without needing retransmission. It is commonly used in wireless, satellite, and optical communications.",
        difficulty: "Medium",
        topic: "Forward Error Correction"
    },
    {
        id: "cn-222",
        question: "Which Wireshark filter shows all DNS queries that received no response (NXDOMAIN)?",
        options: [
            "dns.qry.name contains \"nx\"",
            "dns.flags.rcode == 3",
            "dns.response == 0",
            "dns.err == true"
        ],
        answer: 1,
        explanation: "DNS response code 3 (NXDOMAIN) indicates the domain name does not exist. The filter 'dns.flags.rcode == 3' captures all DNS responses with this error code.",
        difficulty: "Medium",
        topic: "Wireshark"
    },
    {
        id: "cn-223",
        question: "What is the key difference between industrial networking protocols like PROFINET and standard Ethernet?",
        options: [
            "PROFINET uses a different physical layer",
            "PROFINET adds real-time capabilities with deterministic communication and precise timing over standard Ethernet",
            "PROFINET does not use TCP/IP",
            "PROFINET is only for wireless networks"
        ],
        answer: 1,
        explanation: "PROFINET operates over standard Ethernet but adds real-time (RT) and isochronous real-time (IRT) mechanisms for deterministic communication with microsecond-level precision required in industrial automation.",
        difficulty: "Medium",
        topic: "Industrial Networking"
    },
    {
        id: "cn-224",
        question: "What is the difference between STP cable categories Cat5e and Cat6 in terms of performance?",
        options: [
            "They have identical performance specifications",
            "Cat6 provides higher bandwidth (250 MHz vs 100 MHz) and better crosstalk reduction compared to Cat5e",
            "Cat5e supports 10 Gbps; Cat6 only supports 1 Gbps",
            "Cat6 uses fiber optic technology"
        ],
        answer: 1,
        explanation: "Cat6 operates at 250 MHz (vs Cat5e's 100 MHz) with improved crosstalk specifications, supporting 10GBASE-T up to 55 meters. Cat5e supports up to 1000BASE-T at 100 meters.",
        difficulty: "Medium",
        topic: "STP Cable"
    },
    {
        id: "cn-225",
        question: "What happens when a TCP receiver's buffer is full and it advertises a window size of 0?",
        options: [
            "The sender immediately closes the connection",
            "The sender enters a persist state, sending periodic probe segments to check when the window reopens",
            "The sender continues sending data at a reduced rate",
            "The receiver drops all incoming packets"
        ],
        answer: 1,
        explanation: "When the window is zero, the sender enters persist mode and sends zero-window probe segments periodically. The receiver responds with updated window advertisements when buffer space becomes available.",
        difficulty: "Medium",
        topic: "Flow Control"
    },
    {
        id: "cn-226",
        question: "What is the difference between a VLAN access port and a trunk port in terms of frame handling?",
        options: [
            "Both tag frames with VLAN IDs",
            "An access port strips VLAN tags and associates all traffic with a single VLAN; a trunk port carries multiple VLAN-tagged frames",
            "A trunk port only carries untagged frames",
            "An access port can carry multiple VLANs"
        ],
        answer: 1,
        explanation: "An access port connects to end devices and sends/receives untagged frames, associating them with a configured VLAN. A trunk port connects to other switches or routers and carries 802.1Q-tagged frames for multiple VLANs.",
        difficulty: "Medium",
        topic: "VLAN"
    },
    {
        id: "cn-227",
        question: "In BGP, what is the effect of the 'next-hop-self' command?",
        options: [
            "It sets the BGP router ID to the local IP",
            "It changes the NEXT_HOP attribute of advertised routes to the local router's IP address before sending to iBGP peers",
            "It configures the router as the next hop for all routes",
            "It enables BGP on the local interface"
        ],
        answer: 1,
        explanation: "When advertising routes to iBGP peers, 'next-hop-self' replaces the eBGP-learned next-hop with the local router's IP. This is needed because iBGP peers may not have reachability to the original eBGP next-hop address.",
        difficulty: "Medium",
        topic: "BGP"
    },
    {
        id: "cn-228",
        question: "What is a virtual network in cloud computing?",
        options: [
            "A physical network segment in a data center",
            "A logically isolated network partition within a cloud provider's infrastructure that users can configure with their own IP ranges and subnets",
            "A VPN connection to the cloud",
            "A software-defined wireless network"
        ],
        answer: 1,
        explanation: "A virtual network (VNet in Azure, VPC in AWS/GCP) is a user-defined private network partition in the cloud. Users configure IP address ranges, subnets, route tables, and security rules within this isolated space.",
        difficulty: "Medium",
        topic: "Virtual Networks"
    },
    {
        id: "cn-229",
        question: "What is the purpose of DNS caching in a browser versus an operating system?",
        options: [
            "They cache the same data in the same way",
            "Browser caching stores DNS results for domains visited in the browser; OS caching stores results system-wide for all applications",
            "Only the OS caches DNS; browsers do not",
            "Browser caching overrides OS caching completely"
        ],
        answer: 1,
        explanation: "Browsers maintain their own DNS cache for faster lookups of frequently visited sites. The OS also maintains a system-wide DNS cache (resolvable via ipconfig /displaydns on Windows) used by all applications.",
        difficulty: "Medium",
        topic: "Caching"
    },
    {
        id: "cn-230",
        question: "What is the difference between a Wireless Access Point and a Wireless Router?",
        options: [
            "They are the same device",
            "An AP provides wireless connectivity to a wired network; a wireless router adds routing, NAT, DHCP, and firewall functions",
            "A wireless router only provides wireless; an AP provides both wired and wireless",
            "An AP is faster than a wireless router"
        ],
        answer: 1,
        explanation: "A WAP bridges wireless clients to a wired network. A wireless router combines a WAP with a router (NAT, DHCP, firewall), often including a built-in switch for wired connections and a WAN port for internet.",
        difficulty: "Medium",
        topic: "Wireless Access Point"
    },
    {
        id: "cn-231",
        question: "What does the RARP protocol do?",
        options: [
            "Resolves IP addresses to MAC addresses",
            "Resolves a MAC address to an IP address, used by diskless workstations to obtain their IP",
            "Resolves domain names to IP addresses",
            "Resolves port numbers to protocol names"
        ],
        answer: 1,
        explanation: "RARP (Reverse ARP) allows a device that knows its MAC address to discover its IP address. It was primarily used by diskless workstations during boot to obtain their IP configuration from a RARP server.",
        difficulty: "Medium",
        topic: "RARP"
    },
    {
        id: "cn-232",
        question: "What is the role of a gateway in a network architecture?",
        options: [
            "To forward frames at Layer 2",
            "To act as an interface between networks using different protocols or architectures, performing protocol translation",
            "To cache web content",
            "To provide wireless connectivity"
        ],
        answer: 1,
        explanation: "A gateway operates at or above the Network layer and provides protocol translation between dissimilar networks (e.g., a VoIP gateway converting between SIP and PSTN signaling, or an email gateway translating protocols).",
        difficulty: "Medium",
        topic: "Gateway"
    },
    {
        id: "cn-233",
        question: "In OSPF, what triggers a Designated Router (DR) election?",
        options: [
            "Manual configuration only",
            "Automatic election on broadcast and NBMA networks based on highest router priority, then highest router ID",
            "The router with the most interfaces becomes DR",
            "The first router to boot becomes DR"
        ],
        answer: 1,
        explanation: "On multi-access networks (broadcast and NBMA), OSPF elects a DR to reduce adjacency count. The DR is the router with the highest priority (default 1), with router ID as the tiebreaker. A BDR is also elected.",
        difficulty: "Medium",
        topic: "OSPF"
    },
    {
        id: "cn-234",
        question: "What is the purpose of the TCP Maximum Segment Size (MSS) option?",
        options: [
            "To set the maximum IP packet size",
            "To advertise the largest segment of data the sender is willing to receive, avoiding fragmentation at the IP layer",
            "To limit the total number of segments in a connection",
            "To set the retransmission timeout value"
        ],
        answer: 1,
        explanation: "The MSS option (specified during the TCP handshake) indicates the largest amount of data in a single TCP segment the sender can accept. It is typically set to MTU minus IP and TCP header sizes to prevent IP fragmentation.",
        difficulty: "Medium",
        topic: "TCP"
    },
    {
        id: "cn-235",
        question: "Which cloud networking feature allows instances in different availability zones to communicate using private IP addresses?",
        options: [
            "Internet Gateway",
            "VPC Peering",
            "NAT Gateway",
            "Elastic IP"
        ],
        answer: 1,
        explanation: "VPC Peering (or VNet Peering in Azure) creates a private network connection between two VPCs/VNets, allowing resources in different availability zones or even different regions to communicate using private IPs.",
        difficulty: "Medium",
        topic: "Cloud Networking"
    },
    {
        id: "cn-236",
        question: "What is the key difference between SNMP traps and SNMP informs?",
        options: [
            "Traps are encrypted; informs are not",
            "Traps are unconfirmed notifications; informs require acknowledgment from the receiver",
            "Informs are faster than traps",
            "Traps use UDP; informs use TCP"
        ],
        answer: 1,
        explanation: "SNMP traps are unidirectional and unconfirmed - the sender does not know if the trap was received. SNMP informs require the receiver to send an acknowledgment, providing reliable notification delivery.",
        difficulty: "Medium",
        topic: "SNMP"
    },
    {
        id: "cn-237",
        question: "What is port scanning and why is it used in network security?",
        options: [
            "Scanning physical ports on a switch",
            "Systematically probing a host's ports to identify open services and potential vulnerabilities",
            "Scanning for unauthorized physical access to network ports",
            "Monitoring traffic on specific ports"
        ],
        answer: 1,
        explanation: "Port scanning involves sending packets to specific ports to determine which are open, closed, or filtered. Security professionals use it for vulnerability assessment, while attackers use it to find exploitable services.",
        difficulty: "Medium",
        topic: "Port Scanning"
    },
    {
        id: "cn-238",
        question: "What is the function of parity bits in error detection?",
        options: [
            "To correct single-bit errors",
            "To detect single-bit errors by adding an extra bit that makes the total number of 1s even or odd",
            "To detect burst errors",
            "To encrypt data during transmission"
        ],
        answer: 1,
        explanation: "A parity bit is set to make the total count of 1s in a data unit even (even parity) or odd (odd parity). It can detect single-bit errors but cannot correct them or detect an even number of bit errors.",
        difficulty: "Medium",
        topic: "Parity"
    },
    {
        id: "cn-239",
        question: "What is a DDoS attack and how does it differ from a DoS attack?",
        options: [
            "They are the same thing",
            "A DDoS attack uses multiple compromised sources to flood a target simultaneously; a DoS attack typically originates from a single source",
            "A DoS attack is more powerful than a DDoS attack",
            "DDoS only targets web servers; DoS targets any device"
        ],
        answer: 1,
        explanation: "A DoS attack comes from a single source, while a DDoS (Distributed DoS) leverages multiple compromised devices (botnet) to overwhelm a target with traffic from many sources, making it much harder to mitigate.",
        difficulty: "Medium",
        topic: "DDoS"
    },
    {
        id: "cn-240",
        question: "What is the difference between TCP and UDP in terms of header overhead?",
        options: [
            "Both have the same header size",
            "TCP has a 20-byte minimum header; UDP has an 8-byte header",
            "UDP has a larger header than TCP",
            "TCP header is 8 bytes; UDP header is 20 bytes"
        ],
        answer: 1,
        explanation: "The TCP header has a minimum size of 20 bytes (without options) containing sequence numbers, acknowledgment numbers, window size, and flags. The UDP header is only 8 bytes with just length, checksum, and port numbers.",
        difficulty: "Medium",
        topic: "UDP"
    },
    {
        id: "cn-241",
        question: "In a TCP simultaneous open scenario, both ends send SYN to each other at the same time. What is the resulting state machine transition?",
        options: [
            "Both ends enter SYN_SENT and the connection fails",
            "Both ends transition from SYN_SENT to SYN_RECEIVED upon receiving the other's SYN, then to ESTABLISHED after exchanging ACKs",
            "One side must retransmit its SYN",
            "The connection is established after a single packet exchange"
        ],
        answer: 1,
        explanation: "In a simultaneous open, both sides send SYN and enter SYN_SENT. Upon receiving the other's SYN, each transitions to SYN_RECEIVED. Each then sends a SYN+ACK (ACK for the received SYN, SYN for their own), and both move to ESTABLISHED.",
        difficulty: "Hard",
        topic: "TCP Handshake"
    },
    {
        id: "cn-242",
        question: "A BGP router receives the same prefix from two eBGP peers. Peer A advertises AS_PATH [100 200], LOCAL_PREF 100, MED 50. Peer B advertises AS_PATH [100 200 300], LOCAL_PREF 200, MED 10. Which path is selected?",
        options: [
            "Path from Peer A (shorter AS_PATH)",
            "Path from Peer B (higher LOCAL_PREF)",
            "Path from Peer A (lower MED)",
            "The router load-balances between both"
        ],
        answer: 1,
        explanation: "BGP's decision process evaluates LOCAL_PREF (Step 5) before AS_PATH length (Step 6) and MED (Step 8). Peer B's path has LOCAL_PREF 200, which is higher than Peer A's 100, so Peer B's path is selected despite a longer AS_PATH.",
        difficulty: "Hard",
        topic: "BGP"
    },
    {
        id: "cn-243",
        question: "In an OSPF multi-area network, an ABR connects Area 0 and Area 1. Area 1 is configured as a totally stubby area. What type of LSA will the ABR send into Area 1?",
        options: [
            "Type 3 and Type 5 LSAs",
            "Only a single Type 3 default route (0.0.0.0/0)",
            "Type 3, Type 4, and Type 5 LSAs",
            "No LSAs are sent into a totally stubby area"
        ],
        answer: 1,
        explanation: "A totally stubby area blocks all external (Type 5) and inter-area summary (Type 3) LSAs except for a single default route (Type 3 LSA with 0.0.0.0/0) injected by the ABR, minimizing the area's routing table.",
        difficulty: "Hard",
        topic: "OSPF"
    },
    {
        id: "cn-244",
        question: "A network uses VLSM with the following requirements: 4 subnets needing 60 hosts, 3 subnets needing 28 hosts, and 2 subnets needing 12 hosts. What is the most efficient addressing strategy?",
        options: [
            "Use /26 for all subnets to simplify management",
            "Use /26 for 60-host subnets, /27 for 28-host subnets, and /28 for 12-host subnets",
            "Use /25 for all subnets to allow growth",
            "Use /24 for 60-host, /26 for 28-host, and /28 for 12-host"
        ],
        answer: 1,
        explanation: "Matching subnet sizes to actual needs minimizes waste: /26 (64 addresses, 62 usable) for 60 hosts, /27 (32 addresses, 30 usable) for 28 hosts, and /28 (16 addresses, 14 usable) for 12 hosts.",
        difficulty: "Hard",
        topic: "VLSM"
    },
    {
        id: "cn-245",
        question: "What is the TCN (Topology Change Notification) mechanism in STP, and when is it generated?",
        options: [
            "Generated when a new device is added to the network",
            "Generated when a non-edge port transitions to forwarding, causing switches to temporarily reduce their CAM table aging time to 15 seconds",
            "Generated only when the root bridge changes",
            "Generated periodically every hello interval"
        ],
        answer: 1,
        explanation: "When a non-edge port moves to forwarding (indicating a topology change), the switch sends a TCN BPDU to the root bridge. The root then sets the TC flag in its BPDUs, causing all switches to reduce CAM aging to forward_delay (15s default).",
        difficulty: "Hard",
        topic: "STP"
    },
    {
        id: "cn-246",
        question: "In a Kubernetes cluster using Calico CNI with BGP mode, how are pod-to-pod routes distributed across nodes?",
        options: [
            "Through an overlay network using VXLAN",
            "Each node runs a BGP speaker that advertises its pod CIDR to all other nodes, programming routes directly into the kernel",
            "Through a central controller that pushes routes via API",
            "Using static routes configured by the kubelet"
        ],
        answer: 1,
        explanation: "Calico in BGP mode uses a BGP daemon (bird or GoBGP) on each node. Each node advertises its assigned pod CIDR block to all other nodes via BGP, and routes are installed directly in the Linux kernel routing table without overlay encapsulation.",
        difficulty: "Hard",
        topic: "Kubernetes Networking"
    },
    {
        id: "cn-247",
        question: "An EIGRP router has two paths to a destination: Path A with FD=2000, RD=1000; Path B with FD=3000, RD=1500. The current successor is Path A. If Path A fails, will Path B become the feasible successor?",
        options: [
            "Yes, because Path B is the only remaining path",
            "No, because Path B's RD (1500) is not less than Path A's FD (2000), failing the feasibility condition",
            "Yes, because Path B's FD is less than Path A's FD",
            "It depends on the K-values configured"
        ],
        answer: 1,
        explanation: "EIGRP's feasibility condition requires a path's RD to be strictly less than the successor's FD. Path B's RD (1500) >= Path A's FD (2000), so Path B fails the feasibility condition and is not a feasible successor. EIGRP must recompute.",
        difficulty: "Hard",
        topic: "EIGRP"
    },
    {
        id: "cn-248",
        question: "In TCP Cubic congestion control, how does the congestion window grow after a congestion event compared to TCP Reno?",
        options: [
            "Cubic uses linear growth like Reno",
            "Cubic uses a cubic function of time since the last congestion event, providing better bandwidth utilization in high-bandwidth-delay networks",
            "Cubic grows the window exponentially faster than Reno",
            "Cubic does not reduce the window on congestion events"
        ],
        answer: 1,
        explanation: "TCP Cubic uses a cubic function W(t) = C(t - K)^3 + W_max to grow the window, where t is time since the last loss and K is the time to reach W_max. This provides better performance than Reno's linear growth in high-BDP networks.",
        difficulty: "Hard",
        topic: "Congestion Control"
    },
    {
        id: "cn-249",
        question: "A packet capture shows a TCP segment with SEQ=1000, ACK=5000, LEN=1400, and the FIN flag set. What will the next expected SEQ number from this sender be?",
        options: [
            "1000",
            "2400",
            "2401",
            "5000"
        ],
        answer: 2,
        explanation: "The FIN flag consumes one sequence number. The next SEQ = current SEQ + data length + 1 (for FIN) = 1000 + 1400 + 1 = 2401. This is why the FIN is treated as one byte of sequence space.",
        difficulty: "Hard",
        topic: "TCP"
    },
    {
        id: "cn-250",
        question: "In an IPSec VPN, what is the difference between IKEv1 Main Mode and Aggressive Mode?",
        options: [
            "Main Mode uses 3 messages; Aggressive Mode uses 6",
            "Main Mode uses 6 messages with identity protection; Aggressive Mode uses 3 messages but exposes identities in cleartext",
            "Aggressive Mode is more secure than Main Mode",
            "Main Mode does not support encryption"
        ],
        answer: 1,
        explanation: "IKEv1 Main Mode exchanges 6 messages across 3 pairs, keeping peer identities encrypted. Aggressive Mode compresses this into 3 messages (1.5 pairs) for faster setup but exposes identities in cleartext, reducing security.",
        difficulty: "Hard",
        topic: "VPN"
    },
    {
        id: "cn-251",
        question: "A network engineer is troubleshooting asymmetric routing in a firewall environment. What is the fundamental issue?",
        options: [
            "Packets are taking different paths with different latencies",
            "Return traffic takes a different path than the forward traffic, and stateful firewalls may drop the return packets because they didn't see the original connection",
            "Packets are fragmented differently in each direction",
            "DNS resolution returns different IPs for the same domain"
        ],
        answer: 1,
        explanation: "Stateful firewalls track connection state in one direction. If return traffic arrives on a different interface than the outbound traffic, the firewall may not find the state entry and drop the packets, breaking connectivity.",
        difficulty: "Hard",
        topic: "Network Troubleshooting"
    },
    {
        id: "cn-252",
        question: "In IPv6, what is the purpose of the SLAAC (Stateless Address Autoconfiguration) process and how does DAD fit in?",
        options: [
            "SLAAC assigns addresses via DHCPv6; DAD validates the DHCP server",
            "SLAAC generates an IPv6 address by combining a network prefix (from RA) with a self-generated interface identifier, then DAD sends an NS to verify the address is not already in use",
            "SLAAC requires a DHCPv6 server; DAD is optional",
            "SLAAC only works with EUI-64 format addresses"
        ],
        answer: 1,
        explanation: "SLAAC allows a host to create its own IPv6 address using the prefix from a Router Advertisement and a locally generated identifier (EUI-64 or random). Before using the address, Duplicate Address Detection (DAD) verifies uniqueness via Neighbor Solicitation.",
        difficulty: "Hard",
        topic: "IPv6"
    },
    {
        id: "cn-253",
        question: "What is the BGP Confederation mechanism and what problem does it solve?",
        options: [
            "It encrypts BGP sessions between ASes",
            "It splits a large AS into smaller sub-ASes while appearing as a single AS to external peers, reducing the iBGP full-mesh requirement",
            "It creates a backup path for BGP routes",
            "It load-balances BGP traffic across multiple paths"
        ],
        answer: 1,
        explanation: "BGP confederations divide a large AS into multiple sub-ASes with internal confederation eBGP sessions. External peers see only the confederation AS number. This reduces the iBGP full-mesh from O(n^2) to O(sub-AS_size^2) per sub-AS.",
        difficulty: "Hard",
        topic: "BGP"
    },
    {
        id: "cn-254",
        question: "In a network using PIM-Sparse Mode, what is the role of the Rendezvous Point (RP)?",
        options: [
            "It forwards all multicast traffic like a hub",
            "It serves as a meeting point where sources register and receivers join to discover and receive multicast streams before the SPT switchover",
            "It replaces the need for IGMP",
            "It converts multicast to unicast traffic"
        ],
        answer: 1,
        explanation: "In PIM-SM, the RP is the initial meeting point. Sources register with the RP, and receivers join the shared tree (*,G) rooted at the RP. Once traffic flows, routers can switch to a shorter Source-Specific Tree (SPT) directly to the source.",
        difficulty: "Hard",
        topic: "Multicast"
    },
    {
        id: "cn-255",
        question: "What is the TCP selective acknowledgment (SACK) option and why is it important over high-latency links?",
        options: [
            "SACK retransmits all packets from the missing one onward",
            "SACK allows the receiver to inform the sender of exactly which blocks of data have been received, preventing unnecessary retransmission of already-received segments",
            "SACK changes the TCP handshake process",
            "SACK only works with UDP"
        ],
        answer: 1,
        explanation: "Without SACK, a single lost segment causes the receiver to ACK only up to the missing segment, and the sender may retransmit many already-received segments. SACK specifies exactly which data blocks have arrived, reducing redundant retransmissions.",
        difficulty: "Hard",
        topic: "TCP"
    },
    {
        id: "cn-256",
        question: "In MPLS L3VPN, what is the purpose of the VPNv4 address and how does it differ from a regular IPv4 address?",
        options: [
            "VPNv4 uses a different IP format",
            "A VPNv4 address combines an 8-byte RD (Route Distinguisher) with a 4-byte IPv4 address, making the same IPv4 prefix unique across different VPNs",
            "VPNv4 addresses are encrypted",
            "VPNv4 is only used for IPv6 translation"
        ],
        answer: 1,
        explanation: "The VPNv4 address is a 12-byte value: 8-byte RD + 4-byte IPv4 prefix. The RD makes overlapping IPv4 prefixes (e.g., 10.1.1.0/24 in VPN A and B) unique in the provider's BGP table, enabling VRF isolation.",
        difficulty: "Hard",
        topic: "MPLS"
    },
    {
        id: "cn-257",
        question: "A Wireshark capture shows TCP zero-window probes with a window size of 1 being sent every few seconds. The receiver keeps responding with ACKs but window remains 0. What is likely happening?",
        options: [
            "The sender is under a SYN flood attack",
            "The receiver's application is not reading data from the TCP buffer fast enough, causing a sustained zero-window condition",
            "The TCP connection has been hijacked",
            "The network is experiencing severe congestion"
        ],
        answer: 1,
        explanation: "Zero-window probes with persistent zero-window responses indicate the receiver's application is not consuming data from the socket buffer. The buffer remains full, and the sender keeps probing, waiting for window update.",
        difficulty: "Hard",
        topic: "Flow Control"
    },
    {
        id: "cn-258",
        question: "In an OSPF network, what happens when an OSPF router receives an LSA with a sequence number lower than what it already has in its LSDB?",
        options: [
            "It updates its LSDB with the older LSA",
            "It silently discards the LSA and sends a copy of its newer LSA back to the sender",
            "It increments the sequence number and floods it",
            "It triggers a new SPF calculation"
        ],
        answer: 1,
        explanation: "OSPF uses sequence numbers to identify the most recent LSA. If a received LSA has an older (lower) sequence number, the router discards it and sends its own newer copy back to help the sender synchronize its database.",
        difficulty: "Hard",
        topic: "OSPF"
    },
    {
        id: "cn-259",
        question: "What is the TCP timestamp option used for, beyond round-trip time measurement?",
        options: [
            "It is only used for RTT measurement",
            "It protects against wrapped sequence numbers (PAWS) by providing an extended sequence space in high-bandwidth connections",
            "It encrypts the TCP header",
            "It replaces the need for the acknowledgment number"
        ],
        answer: 1,
        explanation: "The TCP timestamp option enables PAWS (Protection Against Wrapped Sequence numbers). At high speeds, sequence numbers can wrap within the MSL. Timestamps provide a secondary check to distinguish old from new segments with the same sequence number.",
        difficulty: "Hard",
        topic: "TCP"
    },
    {
        id: "cn-260",
        question: "In a Cisco SD-Access fabric, what is the role of the fabric edge node versus the fabric border node?",
        options: [
            "They perform the same function",
            "The fabric edge node connects endpoints and encapsulates traffic into VXLAN; the fabric border node connects the fabric to external networks (non-fabric) and handles routing between fabric and external domains",
            "The border node connects endpoints; the edge node connects to external networks",
            "The edge node is the control plane; the border node is the data plane"
        ],
        answer: 1,
        explanation: "In Cisco SD-Access, fabric edge nodes (typically access switches) connect endpoints, enforce policy, and encapsulate traffic in VXLAN. Fabric border nodes provide connectivity to external networks (data centers, internet, non-fabric sites) and handle inter-fabric routing.",
        difficulty: "Hard",
        topic: "SDN"
    },
    {
        id: "cn-261",
        question: "What is the precise difference between how traceroute identifies hops on Linux versus Windows, and why might a Linux traceroute show '*' for a hop that Windows tracert shows an IP?",
        options: [
            "Linux traceroute is less reliable",
            "Linux uses UDP probes that may be filtered by intermediate firewalls; Windows uses ICMP Echo that may pass through, causing different visibility at each hop",
            "Windows uses a faster timeout",
            "Linux sends fewer probes per hop"
        ],
        answer: 1,
        explanation: "Linux traceroute sends UDP packets to high ports, which intermediate firewalls may silently drop (showing '*'). Windows tracert uses ICMP Echo Requests, which some firewalls allow, revealing the hop. This creates different results for the same path.",
        difficulty: "Hard",
        topic: "Traceroute vs Ping"
    },
    {
        id: "cn-262",
        question: "In a network with dual-homed BGP connections to two ISPs, what is the purpose of prepending the local AS number to the AS_PATH for one ISP?",
        options: [
            "To hide the local AS from the other ISP",
            "To make the path through that ISP appear longer and less preferred for inbound traffic, implementing a crude traffic engineering policy",
            "To satisfy BGP's loop prevention mechanism",
            "To increase the number of AS_PATH entries for BGP convergence"
        ],
        answer: 1,
        explanation: "AS_PATH prepending artificially lengthens the AS_PATH for routes advertised to one ISP, making those routes less attractive to the other ISP's customers. This influences inbound traffic to prefer the non-prepended path.",
        difficulty: "Hard",
        topic: "BGP"
    },
    {
        id: "cn-263",
        question: "What is the exact mechanism by which DNSSEC ensures data integrity and authenticity?",
        options: [
            "It encrypts DNS responses",
            "It uses digital signatures (RRSIG records) signed by the zone's private key, with the public key published in DNSKEY records, chained from the root trust anchor",
            "It uses TLS to secure DNS queries",
            "It validates that the IP address is reachable"
        ],
        answer: 1,
        explanation: "DNSSEC adds RRSIG records containing digital signatures over resource record sets. Each zone's DNSKEY record contains the public key, and a chain of trust from the root zone's trust anchor down to the queried zone validates the response.",
        difficulty: "Hard",
        topic: "DNS"
    },
    {
        id: "cn-264",
        question: "In TCP, what is the 'Silly Window Syndrome' and how is it prevented?",
        options: [
            "When the window size oscillates rapidly; prevented by fixing the window size",
            "When small segments are sent due to interaction between the sender's Nagle algorithm and receiver's small window updates; prevented by Clark's solution (receiver doesn't advertise small windows, sender avoids sending small segments)",
            "When the connection opens and closes repeatedly; prevented by persistent connections",
            "When the receiver sends duplicate ACKs; prevented by SACK"
        ],
        answer: 1,
        explanation: "Silly Window Syndrome occurs when the receiver advertises tiny windows and the sender transmits tiny segments, wasting bandwidth. Clark's solution prevents it: receivers advertise window only when it reaches MSS, and senders avoid small segments.",
        difficulty: "Hard",
        topic: "TCP"
    },
    {
        id: "cn-265",
        question: "What is the exact sequence of events when an OSPF router detects a link failure on a broadcast network where it is the DR?",
        options: [
            "It immediately floods a new Type 2 LSA and runs SPF",
            "It floods a new Type 1 Router LSA with the link removed, increments the LSA sequence number, and all routers in the area run SPF after the flooding completes",
            "It sends a TCN BPDU and waits for the root bridge acknowledgment",
            "It triggers a BGP route refresh"
        ],
        answer: 1,
        explanation: "When the DR detects a link failure, it generates a new Type 1 LSA (without the failed link) with an incremented sequence number and floods it throughout the area. All routers that receive this LSA run SPF to update their routing tables.",
        difficulty: "Hard",
        topic: "OSPF"
    },
    {
        id: "cn-266",
        question: "In a Kubernetes cluster, how does the kube-proxy implement iptables mode for Services, and what is its limitation compared to IPVS mode?",
        options: [
            "kube-proxy uses static routing rules; IPVS uses dynamic rules",
            "kube-proxy programs iptables rules that linearly match packets against all Service rules, causing O(n) latency; IPVS uses hash tables for O(1) lookup, scaling better for large clusters",
            "iptables mode doesn't support NodePort services",
            "IPVS mode requires external load balancers"
        ],
        answer: 1,
        explanation: "In iptables mode, kube-proxy creates O(n) iptables rules where each packet traverses the chain linearly. In clusters with thousands of services, this causes significant latency. IPVS uses kernel-level hash tables for O(1) lookups.",
        difficulty: "Hard",
        topic: "Kubernetes Networking"
    },
    {
        id: "cn-267",
        question: "What is the difference between a TCP split handshake attack and a normal TCP three-way handshake?",
        options: [
            "The split handshake uses more packets",
            "In a split handshake, the attacker sends SYN+ACK before SYN, and the legitimate endpoint's ACK completes a connection the attacker controls without sending its own SYN",
            "The split handshake encrypts the SYN packet",
            "There is no difference; it is a myth"
        ],
        answer: 1,
        explanation: "In a split handshake, the attacker (as server) sends SYN+ACK before receiving a SYN. The client's ACK completes what the client believes is a normal connection, but the attacker never sent SYN, potentially bypassing middlebox inspection.",
        difficulty: "Hard",
        topic: "TCP Handshake"
    }
]
