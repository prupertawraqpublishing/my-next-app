import os from 'os';
export default function home() {
    const hostname = os.hostname();
    console.log("===" + os.hostname())
    console.log(hostname)
    return "Hello World "  +hostname;
}

