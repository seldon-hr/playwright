import { test, expect } from '@playwright/test';

test.describe.serial('Flujo completo de cotización de autos', () => {
  let sharedPage;

  test.beforeAll(async ({ browser }) => {
    sharedPage = await browser.newPage();
  });

  test('Iniciar Sesión', async () => {
    test.setTimeout(80000);
    await sharedPage.goto('http://localhost:5173/opl/login?subRamo=autos&instancia=EPEPSICO');
    
    /* Inicio de Sesión */
    /* await sharedPage.getByRole('textbox', { name: 'GPID' }); */
    await sharedPage.getByRole('textbox', { name: 'GPID' }).click();
    await sharedPage.getByRole('textbox', { name: 'GPID' }).fill('devautos');
    await sharedPage.getByRole('textbox', { name: 'CONTRASEÑA' }).click();
    await sharedPage.getByRole('textbox', { name: 'CONTRASEÑA' }).fill('devPW6#7');
    await sharedPage.getByRole('textbox', { name: 'Ingrese el texto de la imagen' }).click();
    await sharedPage.getByRole('textbox', { name: 'Ingrese el texto de la imagen' }).fill('55555');
    await sharedPage.getByRole('button', { name: 'Acceder' }).click();
  });

  test('Cotización', async () => {
    /* Aumentar el tiempo */
      test.setTimeout(120000); //Valor default 30000
      
    /* Cotización */
    await sharedPage.getByRole('textbox', { name: 'PARENTESCO' }).click();
    await sharedPage.getByText('EMPLEADO', { exact: true }).click();
    // Se cambia el orden de llenado, se opta por llenar primero el parentesco y posteriormente el GPID.
    await sharedPage.getByRole('textbox', { name: 'GPID' }).click();
    /* await sharedPage.waitForTimeout(500); */
    await sharedPage.getByRole('textbox', { name: 'GPID'}).clear();
    await sharedPage.getByRole('textbox', { name: 'GPID' }).fill('ROMA821011MDFJGL01');
    await sharedPage.getByRole('textbox', { name: 'INSTITUCIÓN' }).click();
    await sharedPage.getByText('COMERCIALIZADORA PEPSICO').click();
    await sharedPage.getByRole('textbox', { name: 'TIPO DE VEHICULO' }).click();
    await sharedPage.getByText('AUTOMÓVIL', { exact: true }).click();
    await sharedPage.getByRole('combobox').filter({ hasText: 'TIPO DE UNIDAD' }).locator('i').nth(1).click();
    await sharedPage.getByText('NUEVO', { exact: true }).click();
    await sharedPage.getByRole('combobox').filter({ hasText: 'MODELO' }).locator('i').nth(1).click();
    await sharedPage.getByRole('option', { name: '2024' }).locator('div').first().click();
    await sharedPage.getByRole('combobox').filter({ hasText: 'MARCA' }).locator('i').nth(1).click();
    
    // Esperar que cargue el dropdown y hacer scroll hacia CHEVROLET
    await sharedPage.waitForSelector('text=CHEVROLET', { timeout: 10000 });
    await sharedPage.getByText('CHEVROLET').scrollIntoViewIfNeeded();
    await sharedPage.waitForTimeout(2000);
    await sharedPage.getByText('CHEVROLET').click();

    // Esperar que carguen los modelos de Chevrolet
    await sharedPage.waitForTimeout(3000); // Espera 3 segundos
    await sharedPage.getByRole('combobox').filter({ hasText: 'DESCRIPCIÓN' }).locator('i').nth(1).click();
    await sharedPage.getByText('AVEO - LT PLUS F 4P L4 1.5L').scrollIntoViewIfNeeded();
    await sharedPage.getByText('AVEO - LT PLUS F 4P L4 1.5L').click();
        
    // Formas de Pago    
    /* await sharedPage.getByRole('combobox').filter({ hasText: 'FORMA DE PAGO' }).locator('i').nth(1).click();
    await sharedPage.getByText('Pago Referenciado').click(); */
    await sharedPage.getByRole('combobox').filter({ hasText: 'FORMA DE PAGO' }).locator('i').nth(1).click();
    await sharedPage.getByRole('option', { name: 'Por Nomina' }).locator('div').first().click();
    await sharedPage.getByRole('combobox').filter({ hasText: 'PLAZO DE PAGO' }).locator('i').nth(1).click();
    await sharedPage.getByRole('option', { name: 'Mensual' }).locator('div').first().click();
    await sharedPage.getByRole('combobox').filter({ hasText: 'PAQUETE DESEADO' }).locator('i').nth(1).click();
    await sharedPage.getByText('amplia', { exact: true }).click();
    await sharedPage.getByRole('button', { name: 'Cotizar' }).click();
    
    // Esperar a que se procese la cotización
    await sharedPage.waitForTimeout(3000); // Espera 3 segundos
   
    await sharedPage.mouse.wheel(0, 200); 
    await sharedPage.getByRole('button', { name: 'Continuar' }).click();
  });

  test('Datos Asegurado Autos', async () => {
    test.setTimeout(80000);
    /* Up Scroll*/
    await sharedPage.mouse.wheel(0, -1200);

    await sharedPage.getByRole('textbox', { name: 'NOMBRE', exact: true }).click();
    await sharedPage.getByRole('textbox', { name: 'NOMBRE', exact: true }).fill('Alda Jocelyn');
    await sharedPage.getByRole('textbox', { name: 'NOMBRE', exact: true }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'APELLIDO PATERNO', exact: true }).fill('Rojo');
    await sharedPage.getByRole('textbox', { name: 'APELLIDO PATERNO', exact: true }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'APELLIDO MATERNO', exact: true }).fill('Magaña');
    await sharedPage.getByRole('textbox', { name: 'APELLIDO MATERNO', exact: true }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'CONDUCTOR HABITUAL (Y/O)' }).fill('Yo');
    await sharedPage.getByRole('textbox', { name: 'CONDUCTOR HABITUAL (Y/O)' }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'CURP' }).fill('ROMA821011MDFJGL01');
    await sharedPage.getByRole('textbox', { name: 'CURP' }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'RFC' }).fill('ROMA821011M03');
    await sharedPage.getByRole('textbox', { name: 'RFC' }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'TELEFONO', exact: true }).fill('5570766835');
    await sharedPage.getByRole('textbox', { name: 'TELEFONO', exact: true }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'CORREO ELECTRÓNICO' }).fill('lightit.desarrollo2@gmail.com');
    await sharedPage.getByRole('textbox', { name: 'CORREO ELECTRÓNICO' }).press('Tab');
    await sharedPage.getByRole('switch', { name: 'EL ASEGURADO SU CÓNYUGE O ALG' }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'NOMBRE DEL FUNCIONARIO' }).fill('Alda Jocelyn');
    await sharedPage.getByRole('textbox', { name: 'NOMBRE DEL FUNCIONARIO' }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'APELLIDO PATERNO DEL' }).fill('Rojo');
    await sharedPage.getByRole('textbox', { name: 'APELLIDO PATERNO DEL' }).press('Tab');
    await sharedPage.getByRole('textbox', { name: 'APELLIDO MATERNO DEL' }).fill('Magaña');

    await sharedPage.getByRole('combobox').filter({ hasText: 'GENERO' }).locator('i').nth(1).click();
    await sharedPage.getByRole('option', { name: 'MUJER' }).locator('div').first().click();
    await sharedPage.getByRole('textbox', { name: 'PLACAS', exact: true }).click();
    await sharedPage.getByRole('textbox', { name: 'PLACAS', exact: true }).fill('352422A4FQ');
    await sharedPage.getByRole('textbox', { name: 'NO. SERIE (NIV)', exact: true }).click();
    // Generar número de serie Aleatorio de 17 digitos.
    await sharedPage.getByRole('textbox', { name: 'NO. SERIE (NIV)', exact: true }).fill('42739423948327492');
    await sharedPage.getByRole('textbox', { name: 'REPUVE (NCI)', exact: true }).click();
    await sharedPage.getByRole('textbox', { name: 'REPUVE (NCI)', exact: true }).fill('42739423948327492');
    await sharedPage.getByRole('textbox', { name: 'NO. MOTOR', exact: true }).click();
    await sharedPage.getByRole('textbox', { name: 'NO. MOTOR', exact: true }).fill('2');
 
    await sharedPage.mouse.wheel(0, 200); 
    await sharedPage.getByRole('button', { name: 'Continuar' }).click();

  });

  test('Resumen y Emisón', async() => {
    test.setTimeout(20000);
    await sharedPage.getByRole('button', { name: 'EMITIR' }).click();
    //Finalizao Póliza
    await sharedPage.waitForTimeout(10000);
  });

});


// test('Datos Asegurado Autos:', async ({ page }) => {
//     test.setTimeout(80000);
//     /* Subir un poco */
//     await page.mouse.wheel(0, -500);
//     /* await page.keyboard.press('PageUp');
//     await page.keyboard.press('PageUp'); */

//     await page.getByRole('textbox', { name: 'NOMBRE' }).click();
//     await page.getByRole('textbox', { name: 'NOMBRE' }).fill('Alda Jocelyn');
//     await page.getByRole('textbox', { name: 'APELLIDO PATERNO' }).click();
//     await page.getByRole('textbox', { name: 'APELLIDO PATERNO' }).fill('Rojo');
//     await page.getByRole('textbox', { name: 'CONDUCTOR HABITUAL' }).click();
//     await page.getByRole('textbox', { name: 'CONDUCTOR HABITUAL' }).fill('Yo');
//     await page.getByRole('textbox', { name: 'CURP' }).click();
//     await page.getByRole('textbox', { name: 'CURP' }).fill('ROMA821011MDFJGL01');
//     await page.getByRole('textbox', { name: 'RFC' }).click();
//     await page.getByRole('textbox', { name: 'RFC' }).fill('ROMA821011M05');
//     await page.getByRole('textbox', { name: 'TELEFONO' }).click();
//     await page.getByRole('textbox', { name: 'TELEFONO' }).fill('5570766835');
//     await page.getByRole('textbox', { name: 'CORREO ELECTRÓNICO' }).click();
//     await page.getByRole('textbox', { name: 'CORREO ELECTRÓNICO' }).fill('lightit.desarrollo2@gmail.com');
// });