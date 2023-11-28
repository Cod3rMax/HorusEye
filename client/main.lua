local promise = nil

local function ShowMinigame()
    SetNuiFocus(true, true)
    SendNUIMessage({ action = 'ShowUI' })
    repeat Wait(100) until promise ~= nil
    return promise
end

exports('ShowMinigame', ShowMinigame)

RegisterNuiCallback('result', function(data, cb)
    promise = data.promise
    SetNuiFocus(false, false)
end)

RegisterCommand('game', function()
    local result = exports['HorusEye']:ShowMinigame()
    print('Game result: ', result)
end)