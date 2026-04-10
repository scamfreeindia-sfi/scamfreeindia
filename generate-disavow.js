const fs = require('fs');
const path = require('path');

// 1. Place your Google Search Console export file here
const INPUT_FILE = path.join(__dirname, 'external_links.csv');
const OUTPUT_FILE = path.join(__dirname, 'disavow.txt');

// 2. These are the toxic footprints we are hunting for
const TOXIC_KEYWORDS = [
    'casino', 'betting', 'poker', 'gambling', 'slot', 
    'adult', 'porn', 'xxx', 'escort', 'sex', 
    'viagra', 'cialis', 'pharmacy', 'cheap-pills',
    'payday', 'loan', 'cash-advance',
    // Often auto-generated spam TLDs
    '.xyz', '.club', '.top', '.space', '.tk', '.ml'
];

async function generateDisavowFile() {
    if (!fs.existsSync(INPUT_FILE)) {
        console.log(`\x1b[31m[ERROR]\x1b[0m Could not find ${INPUT_FILE}.`);
        console.log(`Please export your "External Links" from Google Search Console as a CSV and save it as 'external_links.csv' in this folder (${__dirname}).`);
        return;
    }

    console.log(`\x1b[34m[INFO]\x1b[0m Reading your backlink profile...`);
    const csvData = fs.readFileSync(INPUT_FILE, 'utf-8');
    
    // Split by new line, extract the domain from the URL
    const lines = csvData.split('\n');
    const toxicDomains = new Set();
    let totalLinksProcessed = 0;

    // A simple regex to extract hostname from URL
    const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img;

    lines.forEach(line => {
        // Skip empty lines or header
        if (!line.trim() || line.toLowerCase().includes('site')) return;
        
        let match = domainRegex.exec(line);
        if (match && match[1]) {
            totalLinksProcessed++;
            let domain = match[1].toLowerCase();
            
            // Check if it matches any toxic keywords
            for (const keyword of TOXIC_KEYWORDS) {
                if (domain.includes(keyword)) {
                    toxicDomains.add(domain);
                    break;
                }
            }
        }
        // Reset regex state since we use the 'g' flag
        domainRegex.lastIndex = 0;
    });

    console.log(`\x1b[32m[SUCCESS]\x1b[0m Processed ${totalLinksProcessed} links.`);
    
    if (toxicDomains.size === 0) {
        console.log(`\x1b[33m[NOTE]\x1b[0m No toxic domains matching the filters were found. Your profile might be clean, or the spam relies on different keywords.`);
        return;
    }

    // Generate Google Disavow Format
    let disavowContent = `# Auto-generated Disavow File for ScamFreeIndia\n`;
    disavowContent += `# Generated on: ${new Date().toISOString().split('T')[0]}\n`;
    disavowContent += `# Filtering: Adult, Casino, Betting, Web 2.0 Spam\n\n`;

    toxicDomains.forEach(domain => {
        disavowContent += `domain:${domain}\n`;
    });

    fs.writeFileSync(OUTPUT_FILE, disavowContent);
    
    console.log(`\x1b[32m[SUCCESS]\x1b[0m Found ${toxicDomains.size} highly toxic domains!`);
    console.log(`\x1b[34m[INFO]\x1b[0m Disavow file generated at: ${OUTPUT_FILE}`);
    console.log(`\n\x1b[33mNext Steps:\x1b[0m`);
    console.log(`1. Review the generated 'disavow.txt' to ensure no safe sites were caught.`);
    console.log(`2. Upload the file to the Google Disavow Tool: https://search.google.com/search-console/disavow-links`);
}

generateDisavowFile();
