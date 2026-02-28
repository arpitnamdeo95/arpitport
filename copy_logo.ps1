$source = "C:\Users\DELL\.gemini\antigravity\brain\2ecaa06e-6937-4f5c-b5de-f3280e06753d\random_abstract_logo_1772268461581.png"
$targetLogo = "f:\arpitnamdeo-main\public\logo.png"
$targetFavicon = "f:\arpitnamdeo-main\public\favicon.png"
$oldFavicon = "f:\arpitnamdeo-main\public\favicon.ico"

if (Test-Path $source) {
    Write-Output "Source found."
    Copy-Item $source $targetLogo -Force -ErrorAction Stop
    Copy-Item $source $targetFavicon -Force -ErrorAction Stop
    Write-Output "Target files copied."
    if (Test-Path $oldFavicon) {
        Remove-Item $oldFavicon -Force
        Write-Output "Old favicon deleted."
    }
} else {
    Write-Output "Source NOT found."
}
Get-ChildItem -Path "f:\arpitnamdeo-main\public"
