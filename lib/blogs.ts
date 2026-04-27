export interface Blog {
  slug: string
  title: string
  description: string
  date: string
  content: string
  tags: string[]
  seoKeywords: string[]
}

export const blogs: Blog[] = [
  {
    slug: "how-to-install-nodejs-on-linux",
    title: "How to Install Node.js on Linux: A Comprehensive Guide",
    description: "Learn how to seamlessly install Node.js on Linux distributions. This guide covers the most efficient methods including Node Version Manager (NVM) and package managers.",
    date: "2026-04-27",
    seoKeywords: ["Install Node.js Linux", "Node.js Ubuntu", "NVM Node.js", "Linux Node setup", "NodeSource Node.js", "Web Development Linux"],
    tags: ["Linux", "Node.js", "Tutorial", "Web Development"],
    content: `
      <h2>Introduction</h2>
      <p>Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It's an essential tool for modern web development, allowing you to run JavaScript on the server side. Installing Node.js on Linux is straightforward, but there are a few methods to choose from depending on your needs.</p>
      
      <h2>Method 1: Using Node Version Manager (NVM) - Recommended</h2>
      <p>Using NVM is highly recommended because it allows you to install and switch between multiple versions of Node.js with ease. This is especially useful if you are working on different projects that require different Node.js versions.</p>
      
      <h3>Step 1: Install NVM</h3>
      <p>First, you need to download and install the NVM script. Open your terminal and run:</p>
      <pre><code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash</code></pre>
      
      <h3>Step 2: Reload your terminal</h3>
      <p>Close and reopen your terminal, or source your profile to apply the changes:</p>
      <pre><code>source ~/.bashrc</code></pre>
      
      <h3>Step 3: Install Node.js</h3>
      <p>Now you can install the latest Long Term Support (LTS) release of Node.js:</p>
      <pre><code>nvm install --lts</code></pre>
      
      <h2>Method 2: Using NodeSource PPA (Ubuntu/Debian)</h2>
      <p>If you prefer using the built-in package manager (APT) and want a specific, up-to-date version of Node.js, the NodeSource repository is the way to go.</p>
      
      <h3>Step 1: Add the NodeSource repository</h3>
      <p>For Node.js 20.x, run the following command:</p>
      <pre><code>curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -</code></pre>
      
      <h3>Step 2: Install Node.js</h3>
      <p>After the setup script finishes, install Node.js using APT:</p>
      <pre><code>sudo apt-get install -y nodejs</code></pre>
      
      <h2>Verifying the Installation</h2>
      <p>Whichever method you chose, you can verify your installation by checking the Node.js and npm (Node Package Manager) versions:</p>
      <pre><code>node -v\nnpm -v</code></pre>
      
      <h2>Conclusion</h2>
      <p>You have successfully installed Node.js on your Linux machine! You are now ready to start building incredible full-stack web applications. NVM provides the most flexibility, but NodeSource is great for straightforward server deployments.</p>
    `
  },
  {
    slug: "mern-stack-guide",
    title: "The MERN Stack Explained: What It Is and How to Build With It",
    description: "Curious about the MERN stack? Here is a no-nonsense guide breaking down MongoDB, Express, React, and Node.js, and how they fit together to build full-stack web apps.",
    date: "2026-04-26",
    seoKeywords: ["MERN stack", "MongoDB", "Express.js", "React.js", "Node.js", "Full-stack development guide", "What is MERN"],
    tags: ["Web Development", "MERN", "JavaScript"],
    content: `
      <p>If you've been looking into web development lately, you've definitely heard of the MERN stack. It's pretty much everywhere. But what actually is it, and why does everyone use it?</p>
      
      <h2>Breaking Down MERN</h2>
      <p>MERN is an acronym that stands for four different technologies that stack on top of each other to let you build a complete web application using only JavaScript.</p>
      <ul>
        <li><strong>MongoDB:</strong> The database. Instead of rows and columns like a traditional SQL database, Mongo stores data in JSON-like documents. It's super flexible.</li>
        <li><strong>Express.js:</strong> The backend web framework. It runs on top of Node and makes building API routing much easier.</li>
        <li><strong>React:</strong> The frontend library built by Facebook. It handles the UI and makes creating dynamic, single-page applications a breeze.</li>
        <li><strong>Node.js:</strong> The runtime environment. It lets you run JavaScript on the server, not just in the browser.</li>
      </ul>

      <h2>Why is it so popular?</h2>
      <p>The biggest selling point of the MERN stack is that it's JavaScript all the way down. You don't need to learn Python or PHP for the backend and JS for the frontend. You just write JS everywhere. This makes context-switching way easier and speeds up development drastically.</p>

      <h2>How to Implement MERN in a Project</h2>
      <p>Building a MERN app usually involves setting up two separate folders: one for the frontend (React) and one for the backend (Node/Express).</p>
      
      <h3>1. Set up the Backend</h3>
      <p>Initialize a Node project and install Express and Mongoose (an elegant MongoDB object modeling tool). You'll write an Express server that connects to your MongoDB database and listens for API requests.</p>
      <pre><code>npm init -y\nnpm install express mongoose cors dotenv</code></pre>

      <h3>2. Set up the Frontend</h3>
      <p>Use Vite or Create React App to spin up your React frontend. This will be where your users interact with your app.</p>
      <pre><code>npm create vite@latest my-frontend -- --template react</code></pre>

      <h3>3. Connect them together</h3>
      <p>Your React frontend will use the <code>fetch</code> API or Axios to make HTTP requests to your Express backend. Your Express backend will then talk to MongoDB to get or save data, and send a JSON response back to React.</p>
      
      <p>And that's the core loop! React asks for data &rarr; Express gets it from Mongo &rarr; Express sends it back &rarr; React displays it.</p>
    `
  },
  {
    slug: "host-minecraft-server-windows-11",
    title: "How to Host a Minecraft Server on Windows 11",
    description: "Want to play Minecraft with your friends without paying for a realm? Here is a step-by-step guide to hosting a vanilla Minecraft server directly on your Windows 11 PC.",
    date: "2026-04-25",
    seoKeywords: ["Minecraft server Windows 11", "Host Minecraft server", "Port forward Minecraft", "Free Minecraft hosting", "Vanilla server setup"],
    tags: ["Gaming", "Minecraft", "Windows"],
    content: `
      <p>Paying for a Minecraft server gets annoying quickly, especially if you just want to play with a couple of friends on the weekend. The good news is, if you have a decent Windows 11 PC, you can host the server yourself for free. Here's exactly how to get it running.</p>
      
      <h2>1. Get the Right Java Version</h2>
      <p>Minecraft runs on Java. Depending on the version of the game you want to host, you need a specific Java version. For Minecraft 1.20 and above, you need Java 17 or Java 21. Head over to the official Oracle website or Adoptium, download the installer for Windows, and get it installed.</p>

      <h2>2. Download the Server File</h2>
      <p>Go to the official Minecraft website and download the <code>server.jar</code> file. Create a brand new folder on your desktop (call it something like "MC Server") and drop that jar file inside.</p>

      <h2>3. The First Run and EULA</h2>
      <p>Double-click the <code>server.jar</code> file. It'll run for a second, create some files, and then suddenly stop. Don't panic, this is completely normal. Open the newly created <code>eula.txt</code> file in Notepad, change <code>eula=false</code> to <code>eula=true</code>, and save it. You just legally agreed to their terms of service.</p>

      <h2>4. Creating a Run Script</h2>
      <p>You want to give your server enough RAM so it doesn't lag. Create a new text file in the folder and paste this in:</p>
      <pre><code>java -Xmx4096M -Xms4096M -jar server.jar nogui\npause</code></pre>
      <p>This allocates 4GB of RAM to the server. Save the file as <code>run.bat</code> (make sure it's not run.bat.txt). Double-click this batch file to start your server properly. You should see a command prompt window generating the world data.</p>

      <h2>5. Port Forwarding (The Tricky Part)</h2>
      <p>Right now, only people on your local Wi-Fi can join. To let your friends join over the internet, you have to port forward your router. The default Minecraft port is <code>25565</code>.</p>
      <ul>
        <li>Log into your router's admin panel (usually 192.168.1.1 or 10.0.0.1 in your browser).</li>
        <li>Find the Port Forwarding section in the advanced settings.</li>
        <li>Add a new rule for port <code>25565</code> (both TCP and UDP) pointing to your PC's local IPv4 address.</li>
      </ul>
      <p>Once that's done, just google "what is my IP", give that public IP address to your friends, and they can join your world instantly!</p>
    `
  },
  {
    slug: "claude-opus-antigravity-free",
    title: "How to Use Claude Opus in Antigravity for Free",
    description: "A quick guide on leveraging Antigravity to access and utilize Claude Opus models without hitting massive API paywalls.",
    date: "2026-04-24",
    seoKeywords: ["Claude Opus free", "Antigravity AI", "Claude 3 Opus integration", "Free AI tools", "Antigravity setup"],
    tags: ["AI", "Tools", "Antigravity"],
    content: `
      <p>If you're using Antigravity for agentic coding and automation, you probably already know how ridiculously powerful it is. But a lot of people don't realize you can actually hook it up to Claude Opus without necessarily paying massive API costs, provided you use the right setup.</p>
      
      <h2>Why Claude Opus?</h2>
      <p>Opus is currently one of Anthropic's most capable models, especially for deep reasoning, architectural planning, and complex coding tasks. Having it drive your Antigravity workflows means better code generation and fewer frustrating logic errors down the line.</p>

      <h2>The Setup Process</h2>
      <p>By default, Antigravity lets you pick from a variety of models out of the box. To get Opus running smoothly:</p>
      
      <h3>1. Accessing the Model Selection</h3>
      <p>Open up your Antigravity user settings or configuration dashboard. There's a dedicated dropdown for 'Model Selection'. This is where the magic happens. You'll want to swap from the default Gemini or GPT models over to the Anthropic suite.</p>

      <h3>2. API Keys and Workarounds</h3>
      <p>Usually, Opus requires a paid Anthropic API key. However, if you are participating in specific developer betas, hackathons, or using cloud provider credits (like AWS Bedrock or GCP Vertex AI which sometimes offer generous free startup tiers for Anthropic models), you can route those credentials straight into Antigravity.</p>
      <p>Alternatively, some open-source router layers allow you to pool free tier limits, but honestly, the most reliable way is utilizing cloud provider startup credits. Grab your access token, drop it into the Antigravity config, and select the Opus variant.</p>

      <h2>Getting the Most out of It</h2>
      <p>Opus is a heavy model, so it can be slightly slower than Sonnet or Haiku. To keep your workflow snappy, use Opus specifically for architecture planning or debugging gnarly errors, and switch back to a faster model for simple boilerplate tasks. This maximizes efficiency while minimizing costs.</p>
    `
  },
  {
    slug: "install-pterodactyl-ubuntu-game-server",
    title: "How to Install Pterodactyl on Ubuntu and Host Game Servers",
    description: "A complete walkthrough on installing the Pterodactyl Panel and Wings on Ubuntu to host Minecraft and other game servers effortlessly.",
    date: "2026-04-23",
    seoKeywords: ["Install Pterodactyl Ubuntu", "Game server panel setup", "Host Minecraft Pterodactyl", "Pterodactyl Wings installation", "Linux game server"],
    tags: ["Linux", "DevOps", "Gaming"],
    content: `
      <p>Hosting one Minecraft server using a batch script is fine, but what if you want to host five? Or what if you want to host a Rust server and a CS:GO server alongside it? Doing that manually in the terminal is an absolute nightmare. That's where Pterodactyl comes in. It's a free, open-source game server management panel that runs seamlessly on Docker.</p>
      <p>Here's a straight-to-the-point guide on getting it running on a fresh Ubuntu server.</p>

      <h2>The Architecture</h2>
      <p>Pterodactyl is split into two main parts:</p>
      <ul>
        <li><strong>The Panel:</strong> The web interface where you click buttons to manage servers.</li>
        <li><strong>Wings:</strong> The backend daemon that actually runs on your node and controls the Docker containers.</li>
      </ul>
      <p>You can install them both on the same machine, which is exactly what we'll do here.</p>

      <h2>1. Installing the Panel</h2>
      <p>First, SSH into your Ubuntu server. Make sure your system is completely updated.</p>
      <pre><code>apt update && apt upgrade -y</code></pre>
      <p>The absolute easiest way to install Pterodactyl is using the unofficial community installation script. It handles downloading PHP, configuring Nginx, and setting up the database automatically.</p>
      <pre><code>bash <(curl -s https://pterodactyl-installer.se)</code></pre>
      <p>Select the option to install the Panel. The script will ask you some basic questions like your database password, the email for the admin account, and the domain name you want to use (make sure you've pointed an A record from your domain to your server's IP!).</p>

      <h2>2. Installing Wings</h2>
      <p>Once the panel is up, run the script again, but this time select Wings.</p>
      <pre><code>bash <(curl -s https://pterodactyl-installer.se)</code></pre>
      <p>Wings requires Docker, and the script will set all of that up for you. Once it's installed, you need to link Wings to your Panel.</p>

      <h2>3. Linking Them Together</h2>
      <p>Log into your newly created Pterodactyl web panel. Go to the Admin control area, navigate to 'Nodes', and create a new node. Give it a name and set the FQDN (your domain). Once created, click on the 'Configuration' tab for that node. You'll see a block of YAML code or an auto-deploy command.</p>
      <p>Paste that auto-deploy command into your Ubuntu terminal. This configures Wings. Finally, start Wings:</p>
      <pre><code>systemctl enable --now wings</code></pre>

      <h2>4. Creating a Minecraft Server</h2>
      <p>Now for the fun part. In the admin panel, go to 'Servers' and click 'Create New'.</p>
      <p>Select your node, allocate some memory (e.g., 4096 MB), and pick the Minecraft 'Egg' (an Egg is just a configuration template for a specific game). Click create, and Pterodactyl will automatically download the server files, spin up a Docker container, and give you a beautiful console interface to play with.</p>
      <p>That's it! You've got your own enterprise-grade game hosting setup running for free.</p>
    `
  }
]

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug)
}

export function getAllBlogs(): Blog[] {
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
