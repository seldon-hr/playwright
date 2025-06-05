import { test, expect } from '@playwright/test';

test('Cotización Autos: ', async ({ page }) => {
    /* Aumentar el tiempo */
    test.setTimeout(90000); //Valor default 30000

    await page.goto('http://localhost:5173/opl/login?subRamo=autos&instancia=EPEPSICO');
    
    /* Inicio de Sesión */
    await page.getByRole('textbox', { name: 'GPID' }).click();
    await page.getByRole('textbox', { name: 'GPID' }).fill('devautos');
    await page.getByRole('textbox', { name: 'CONTRASEÑA' }).click();
    await page.getByRole('textbox', { name: 'CONTRASEÑA' }).fill('devPW6#7');
    await page.getByRole('textbox', { name: 'Ingrese el texto de la imagen' }).click();
    await page.getByRole('textbox', { name: 'Ingrese el texto de la imagen' }).fill('55555');
    await page.getByRole('button', { name: 'Acceder' }).click();
    /* Cotización */
    await page.getByRole('textbox', { name: 'GPID' }).click();
    await page.getByRole('textbox', { name: 'GPID' }).fill('ROMA821011MDFJGL01');
    await page.getByRole('textbox', { name: 'PARENTESCO' }).click();
    await page.getByText('EMPLEADO', { exact: true }).click();
    await page.getByRole('textbox', { name: 'INSTITUCIÓN' }).click();
    await page.getByText('COMERCIALIZADORA PEPSICO').click();
    await page.getByRole('textbox', { name: 'TIPO DE VEHICULO' }).click();
    await page.getByText('AUTOMÓVIL', { exact: true }).click();
    await page.getByRole('combobox').filter({ hasText: 'TIPO DE UNIDAD' }).locator('i').nth(1).click();
    await page.getByText('NUEVO', { exact: true }).click();
    await page.getByRole('combobox').filter({ hasText: 'MODELO' }).locator('i').nth(1).click();
    await page.getByRole('option', { name: '2024' }).locator('div').first().click();
    await page.getByRole('combobox').filter({ hasText: 'MARCA' }).locator('i').nth(1).click();
    
    // Esperar que cargue el dropdown y hacer scroll hacia CHEVROLET
    await page.waitForSelector('text=CHEVROLET', { timeout: 10000 });
    await page.getByText('CHEVROLET').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await page.getByText('CHEVROLET').click();
    

    // Esperar que carguen los modelos de Chevrolet
    await page.waitForTimeout(3000); // Espera 3 segundos
    await page.getByRole('combobox').filter({ hasText: 'DESCRIPCIÓN' }).locator('i').nth(1).click();
    await page.getByText('AVEO - LT PLUS F 4P L4 1.5L').scrollIntoViewIfNeeded();
    await page.getByText('AVEO - LT PLUS F 4P L4 1.5L').click();
        

        
        
    await page.getByRole('combobox').filter({ hasText: 'FORMA DE PAGO' }).locator('i').nth(1).click();
    await page.getByText('Pago Referenciado OPL').click();
    await page.getByRole('textbox', { name: 'PAQUETE DESEADO' }).click();
    await page.getByText('amplia DM 5').click();
    await page.getByRole('button', { name: 'Cotizar' }).click();
    
    // Esperar a que se procese la cotización
    await page.waitForTimeout(3000); // Espera 3 segundos
    
    await page.getByRole('button', { name: 'Continuar' }).click();
});


test('Datos Asegurado Autos:', async ({ page }) => {
    test.setTimeout(80000);
    /* Subir un poco */
    await page.keyboard.press('PageUp');
    await page.keyboard.press('PageUp');

    await page.getByRole('textbox', { name: 'NOMBRE' }).click();
    await page.getByRole('textbox', { name: 'NOMBRE' }).fill('Alda Jocelyn');
    await page.getByRole('textbox', { name: 'APELLIDO PATERNO' }).click();
    await page.getByRole('textbox', { name: 'APELLIDO PATERNO' }).fill('Rojo');
    await page.getByRole('textbox', { name: 'CONDUCTOR HABITUAL' }).click();
    await page.getByRole('textbox', { name: 'CONDUCTOR HABITUAL' }).fill('Yo');
    await page.getByRole('textbox', { name: 'CURP' }).click();
    await page.getByRole('textbox', { name: 'CURP' }).fill('ROMA821011MDFJGL01');
    await page.getByRole('textbox', { name: 'RFC' }).click();
    await page.getByRole('textbox', { name: 'RFC' }).fill('ROMA821011M05');
    await page.getByRole('textbox', { name: 'TELEFONO' }).click();
    await page.getByRole('textbox', { name: 'TELEFONO' }).fill('5570766835');
    await page.getByRole('textbox', { name: 'CORREO ELECTRÓNICO' }).click();
    await page.getByRole('textbox', { name: 'CORREO ELECTRÓNICO' }).fill('lightit.desarrollo2@gmail.com');
});