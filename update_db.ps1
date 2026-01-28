$path = "src/db.json"
$json = Get-Content -Raw $path | ConvertFrom-Json
foreach ($user in $json) {
    if ($user.username) {
        $first = $user.username.Substring(0,1).ToUpper()
        $rest = $user.username.Substring(1)
        $user.username = "$first$rest"
        $user.email = "$($user.username)@gmail.com"
    }
}
$json | ConvertTo-Json -Depth 10 | Set-Content $path
Write-Host "Database updated successfully."
