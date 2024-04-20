
export const sentToWindowURL = (url: string, target?: string) => {
    return window.open(url, target || "_blank")
}

