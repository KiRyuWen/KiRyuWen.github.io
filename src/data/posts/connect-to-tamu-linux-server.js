// One blog post. The filename (minus .js) becomes the URL: /blog/connect-to-tamu-linux-server
// It is picked up automatically by ./index.js — no registration needed.
//
// Block types used in `blocks`:
//   { t: 'h2',   text }                     section heading
//   { t: 'p',    text }                     paragraph
//   { t: 'p',    html }                     paragraph with inline links (trusted HTML)
//   { t: 'note', text }                     highlighted callout
//   { t: 'ol' | 'ul', items: [] }           list (items may be strings or HTML)
//   { t: 'code', code, label? }             monospace block, optional label above it

export default {
  title: 'How to Connect to a Linux Server at Texas A&M',
  date: '2026-09-02',
  summary:
    'From confirming you have access to getting a shell on linux.cse.tamu.edu — including the home-directory step that trips most people up.',
  tags: ['TAMU', 'Linux', 'SSH'],
  blocks: [
    { t: 'h2', text: 'Background' },
    {
      t: 'p',
      text:
        "I'm a Master's student in Computer Science under the CSCE department, starting Fall 2026. My advisor may change later, so treat the department-specific details below as a snapshot rather than a rule.",
    },
    {
      t: 'note',
      text:
        'You have to be on the Texas A&M network to reach these servers — connect to tamu_wifi on campus, or the TAMU VPN from anywhere else.',
    },
    {
      t: 'p',
      html:
        'The VPN client is Cisco Secure Client. Get it from <a href="https://connect.tamu.edu" target="_blank" rel="noopener">connect.tamu.edu</a> — the page detects your OS — and sign in with your NetID plus Duo.',
    },

    { t: 'h2', text: 'Outline' },
    {
      t: 'ol',
      items: [
        'Find out whether you can connect to the school servers at all — this information comes from orientation',
        'Find the server address',
        'Pick a tool to connect with',
        'Create your home directory over SMB',
        'Connect',
        'Troubleshooting',
      ],
    },

    { t: 'h2', text: '1. Confirm you have access' },
    {
      t: 'p',
      text:
        'Access is announced at the department orientation, so go to it and ask there. If you missed it, or it never came up, email a graduate advisor directly.',
    },
    {
      t: 'p',
      html: '<a href="mailto:grad-advisor@cse.tamu.edu">grad-advisor@cse.tamu.edu</a>',
    },

    { t: 'h2', text: '2. Find the server address' },
    {
      t: 'p',
      text:
        'As far as I know there are two servers. The first one answers to several hostnames, but they all resolve to the same IP address:',
    },
    {
      t: 'ol',
      items: [
        'linux.cse.tamu.edu, interactive.cse.tamu.edu, linux2.engr.tamu.edu — same machine',
        'compute.cse.tamu.edu',
      ],
    },
    {
      t: 'p',
      text:
        'I have only used the first one, and it is the right default for logging in and doing normal work. If you need compute.cse.tamu.edu for something heavier, ask the helpdesk what it is meant for before assuming.',
    },

    { t: 'h2', text: '3. Pick a tool' },
    {
      t: 'p',
      text:
        'On macOS or Linux, ssh is already installed — open a terminal and you are done. On Windows, use PuTTY, which most CS students have seen before.',
    },

    { t: 'h2', text: '4. Create your home directory' },
    {
      t: 'p',
      text:
        'This is the step most people skip. You have to create your home directory over SMB first — until it exists, SSH will keep rejecting you.',
    },
    {
      t: 'p',
      text:
        'There is no "create" button anywhere: connecting to the file share is what creates the directory. Do it from your own laptop, not from the Linux server. When a window opens showing a folder named after your classification (Grads, Ugrads, and so on), the directory exists and you can move on.',
    },
    {
      t: 'p',
      html:
        'Full instructions: <a href="https://docs.ao.tamu.edu/docs/endpoints/engr-home-directory/" target="_blank" rel="noopener">docs.ao.tamu.edu — Engineering home directory</a>',
    },
    {
      t: 'code',
      label: 'macOS',
      code: `Open Finder

Open the menu: Go > Connect to Server (Command + K)

Type in one of the following addresses based on your classification,
replacing yourNetID with your TAMU NetID:

  Undergraduate Students:
    smb://AUTH\\yourNetID@coe-fs.engr.tamu.edu/Ugrads
  Graduate Students:
    smb://AUTH\\yourNetID@coe-fs.engr.tamu.edu/Grads
  Faculty:
    smb://AUTH\\yourNetID@coe-fs.engr.tamu.edu/Faculty
  Staff:
    smb://AUTH\\yourNetID@coe-fs.engr.tamu.edu/Staff

Sign in, making sure Name: appears as AUTH\\yourNetID, then fill in your password.`,
    },
    {
      t: 'code',
      label: 'Windows',
      code: `Open File Explorer

Right click "This PC" and choose "Map Network Drive..."

Type the address for the College of Engineering file share:

  Undergraduate Students:
    \\\\coe-fs.engr.tamu.edu\\Ugrads
  Graduate Students:
    \\\\coe-fs.engr.tamu.edu\\Grads
  Faculty:
    \\\\coe-fs.engr.tamu.edu\\Faculty
  Staff:
    \\\\coe-fs.engr.tamu.edu\\Staff

Sign in with AUTH\\yourNetID`,
    },

    { t: 'h2', text: '5. Connect' },
    {
      t: 'note',
      text:
        'This is where you are most likely to hit an error. If you still get "permission denied" or "access denied" after the home directory exists, jump to Troubleshooting.',
    },
    {
      t: 'p',
      text:
        'Log in as your NetID alone — no @tamu.edu. The password is the same one you use for Howdy (the Microsoft login).',
    },
    { t: 'code', label: 'macOS / Linux', code: 'ssh yourNetID@linux.cse.tamu.edu' },
    {
      t: 'p',
      text:
        'On Windows, open PuTTY, put the same address in the Host Name field, leave the port at 22, and click Open. It will ask for your NetID and password.',
    },
    {
      t: 'p',
      text:
        'Once you are in, run pwd. It should print your home directory — the same one you just created over SMB. If it does, everything is wired up correctly.',
    },
    {
      t: 'note',
      text:
        'You can install PuTTY on macOS with brew install putty, but it pulls in GTK and needs XQuartz to open its window. Since ssh is already built in, it is not worth the trouble unless you specifically want the PuTTY interface.',
    },

    { t: 'h2', text: '6. Troubleshooting' },
    {
      t: 'p',
      html:
        'Contact <a href="mailto:cse-helpdesk@tamu.edu">cse-helpdesk@tamu.edu</a> for help.',
    },
    {
      t: 'p',
      text:
        'If you get "access denied" or "permission denied", email them the exact error message you saw. You will get a ticket back, and then you wait for IT to open the permissions on your account. Mine took about half a day.',
    },
    {
      t: 'p',
      text:
        'They only work weekday daytime hours, and in my experience replies stop coming after about 4pm. If you send the email late in the day or over the weekend, expect to wait until the next working morning.',
    },
    {
      t: 'p',
      text:
        'I also asked whether my setup or my steps were wrong, and never got an answer — so do not wait on a diagnosis. Just file the ticket.',
    },
  ],
}
