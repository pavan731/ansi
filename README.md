# ansi

# Keeping a Node.js App Running in a Linux Server with PM2


Do you have a Node.js application that you want to keep running reliably on a Linux server, even after system reboots? Look no further than PM2 (Process Manager 2), a powerful tool that allows you to manage and maintain Node.js applications effortlessly.

In this guide, we'll walk you through the process of installing PM2 and setting up a startup script to ensure your Node.js app keeps running without manual intervention.

# Installing PM2
Before diving into the setup process, ensure you have Node.js and npm installed on your Linux server. You can download and install them from the official website. Once that's done, proceed with the following steps:

Install PM2 Globally:

Open your terminal and run the following command to install PM2 globally:

npm install pm2 -g
Verify Installation:

Confirm that PM2 is installed correctly by checking its version:


pm2 --version
You should see the installed PM2 version displayed on your screen.

# Creating a PM2 Startup Script
Now that PM2 is installed, it's time to create a startup script to ensure your Node.js app starts automatically when the server reboots.

# Generate the Startup Script:

Run the following command to generate the startup script:


pm2 startup
This command will display a script that you need to copy and execute. It will look something like this:


sudo env PATH=$PATH:/path/to/node/bin /path/to/pm2/bin/pm2 startup systemd -u your_username --hp /home/your_username
Copy and paste this command into your terminal to set up the startup script.

# Saving Running PM2 Processes:

Before you proceed, make sure all the PM2-managed processes you want to start on boot are running. You can check the list of running processes with pm2 list.

To save the currently running processes, execute the following command:

pm2 save
This will create a dump.pm2 file, ensuring that your scripts automatically start on server reboots.

Enjoy Automatic Restart
With the PM2 startup script in place and your processes saved, your Node.js applications will automatically restart whenever your server reboots. This hands-off approach ensures that your apps remain available to users without manual intervention.

If you ever need to manually restart all processes, you can execute the following command:


pm2 resurrect
That's it! You've successfully set up PM2 to keep your Node.js apps running smoothly on your Linux server. Say goodbye to worrying about app downtime due to server reboots.

Now, focus on developing your Node.js apps with confidence, knowing that PM2 has your back.

Happy coding! 🚀
