import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
 
export default function Encuesta() {
  const [paso, setPaso] = useState(1);
 
  const [form, setForm] = useState({
    avisoPrivacidad: "",
    titulo: "",
    nombre: "",
    empresa: "",
    puesto: "",
    estado: "",
    correo: "",
    telefono: "",
    whatsapp: "",
    celular: "",
    municipio: "",
    parqueIndustrial: "",
    seccion1Industrial: "",
    otroIndustrial:"",
    productoServicio: "",
    sectoresEconomicos: [],
    otroSector: "",
    origenCapital: "",
    otroOrigenCapital: "",
    tiempoOperacion: "",
    confederacionSindical: "",
    procesosEmpresa: [],
    otroProceso: "",
    categoriaCompania: [],
    otraCategoria: "",
    nivelProveeduria: [],
    armadoras: [],
    otraArmadora: [],
    empleadosOperativos: "",
    empleadosAdministrativos: "",
    otrosEmpleados: "",
    porcentajeMujeres: "",
    porcentajeHombres: "",
    babyBoomers: "",
    generacionX: "",
    millennials1: "",
    millennials2: "",
    generacionZ: "",
    edadDesconocida: "", 
    puestosTecnicos: [],
    otroPuestoTecnico: "",
    salarioMinimo: {},
    salarioPromedio: {}, 
    salarioMaximo: {},
    promedioEmpleados: {},
    posicionesTecnicas: [],
    primeraParticipacion: "",
    nombreComercial: "",
    gruposEmpresariales: [],
    otroGrupoEmpresarial: "",
    contactoAdicional: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
 
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCheckbox = (name, value) => {
  setForm((prev) => {
    const existe = prev[name].includes(value);
 
    return {
      ...prev,
      [name]: existe
        ? prev[name].filter((v) => v !== value)
        : [...prev[name], value],
    };
  });
};
  const handleSubmit = () => {
    console.log(form);
    alert("Formulario enviado");
  };
 
  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        p: 4,
      }}
    >
      {/* PASO 1 */}
      {paso === 1 && (
        <>
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            sx={{ mb: 4 }}
          >
            Instructivo para el llenado de la encuesta
          </Typography>
 
          <Typography
            sx={{
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              mb: 4,
            }}
          >
            También puedes consultarlo en la línea: qikwql
          </Typography>
 
          <FormControl sx={{ width: "100%" }}>
            <FormLabel>
              1. Aviso de Privacidad
            </FormLabel>
 
            <RadioGroup
              name="avisoPrivacidad"
              value={form.avisoPrivacidad}
              onChange={handleChange}
            >
              <FormControlLabel
                value="acepto"
                control={<Radio />}
                label="He leído y estoy de acuerdo en compartir mi información de acuerdo a lo establecido en el Aviso de Privacidad."
              />
 
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No deseo participar."
              />
            </RadioGroup>
          </FormControl>
 
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            <Button disabled variant="outlined">
              Anterior
            </Button>
 
            <Button
              variant="contained"
              disabled={form.avisoPrivacidad !== "acepto"}
              onClick={() => setPaso(2)}
            >
              Siguiente
            </Button>
          </Box>
        </>
      )}
 
      {/* PASO 2 */}
      {paso === 2 && (
        <>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 4 }}
          >
            Información de contacto
          </Typography>
 
          <Typography sx={{ mb: 1 }}>
            3. Título Protocolario
          </Typography>
 
          <FormControl fullWidth sx={{ mb: 3 }}>
            <Select
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                Seleccione una opción
              </MenuItem>
 
              <MenuItem value="Ing.">Ing.</MenuItem>
              <MenuItem value="Lic.">Lic.</MenuItem>
              <MenuItem value="Dr.">Dr.</MenuItem>
              <MenuItem value="Mtro.">Mtro.</MenuItem>
            </Select>
          </FormControl>
 
          <Typography sx={{ mb: 1 }}>
            4. Nombre Completo
          </Typography>
 
          <TextField
            fullWidth
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
 
          <Typography sx={{ mb: 1 }}>
            5. Empresa
          </Typography>
 
          <TextField
            fullWidth
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
 
          <Typography sx={{ mb: 1 }}>
            6. Puesto
          </Typography>
 
          <TextField
            fullWidth
            name="puesto"
            value={form.puesto}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
 
          <Typography sx={{ mb: 1 }}>
            7. Estado
          </Typography>
 
          <FormControl fullWidth sx={{ mb: 3 }}>
            <Select
              name="estado"
              value={form.estado}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                Seleccione un estado
              </MenuItem>
 
              <MenuItem value="Nuevo León">
                Nuevo León
              </MenuItem>
 
              <MenuItem value="Tamaulipas">
                Tamaulipas
              </MenuItem>
 
              <MenuItem value="CDMX">
                CDMX
              </MenuItem>
            </Select>
          </FormControl>
 
          <Typography sx={{ mb: 1 }}>
            8. Correo Electrónico Institucional
          </Typography>
 
          <TextField
            fullWidth
            name="correo"
            value={form.correo}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
 
          <Typography sx={{ mb: 1 }}>
            9. Teléfono Oficina
          </Typography>
 
          <TextField
            fullWidth
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            helperText="Formato a 10 dígitos"
            sx={{ mb: 3 }}
          />
 
          <FormControl sx={{ width: "100%", mb: 3 }}>
            <FormLabel>
              10. ¿Autoriza que lo contactemos vía WhatsApp?
            </FormLabel>
 
            <RadioGroup
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
            >
              <FormControlLabel
                value="si"
                control={<Radio />}
                label="Sí, acepto"
              />
 
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No, no acepto por el momento"
              />
            </RadioGroup>
          </FormControl>
 
          {form.whatsapp === "si" && (
            <>
              <Typography sx={{ mb: 1 }}>
                Por favor capture su número celular
              </Typography>
 
              <TextField
                fullWidth
                name="celular"
                value={form.celular}
                onChange={handleChange}
                helperText="Formato a 10 dígitos"
                sx={{ mb: 3 }}
              />
            </>
          )}
 
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setPaso(1)}
            >
              Anterior
            </Button>
 
            <Button
              variant="contained"
              onClick={() => setPaso(3)}
            >
              Siguiente
            </Button>
          </Box>
        </>
      )}
 
      {/* PASO 3 */}
      {paso === 3 && (
        <>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 4 }}
          >
            Nuevo León
          </Typography>
 
          <Typography sx={{ mb: 1 }}>
            11. Por favor, seleccione el municipio donde se encuentran ubicados
          </Typography>
 
          <FormControl fullWidth sx={{ mb: 3 }}>
            <Select
              name="municipio"
              value={form.municipio}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                Seleccione un municipio
              </MenuItem>
 
              <MenuItem value="San Nicolás de los Garza">
                San Nicolás de los Garza
              </MenuItem>
 
              <MenuItem value="Monterrey">
                Monterrey
              </MenuItem>
 
              <MenuItem value="Guadalupe">
                Guadalupe
              </MenuItem>
 
              <MenuItem value="Apodaca">
                Apodaca
              </MenuItem>
            </Select>
          </FormControl>
 
          <Typography sx={{ mb: 1 }}>
            12. ¿Dentro de qué parque o zona industrial están ubicados?
          </Typography>
 
          <FormControl fullWidth>
            <Select
              name="parqueIndustrial"
              value={form.parqueIndustrial}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                Seleccione una opción
              </MenuItem>
 
              <MenuItem value="No estamos dentro de algún parque industrial">
                No estamos dentro de algún parque industrial
              </MenuItem>
            </Select>
          </FormControl>
 
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setPaso(2)}
            >
              Anterior
            </Button>
 
            <Button
              variant="contained"
              onClick={() => setPaso(4)}
            >
              Siguiente
            </Button>
          </Box>
        </>
      )}
{/* PASO 4 */}
{paso === 4 && (
  <>
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        SECCIÓN 1
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 3 }}>
      Compañía: {form.empresa || "Sin especificar"}
    </Typography>
 
    <Typography
      variant="h6"
      fontWeight="bold"
      sx={{ mb: 2 }}
    >
      Información de las siguientes secciones:
    </Typography>
 
    <Box sx={{ ml: 3, mb: 5 }}>
      <Typography>• Giro y procesos.</Typography>
      <Typography>• Origen de inversión.</Typography>
      <Typography>• Tiempo de operación.</Typography>
      <Typography>• Confederación sindical.</Typography>
      <Typography>• Tabulador salarial - niveles operativo.</Typography>
      <Typography>• Tabulador salarial - niveles técnicos.</Typography>
    </Box>
 
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h6">
        Información General - Tipo de Industria
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 2 }}>
      En esta sección, se requiere identificar la principal
      industria en la cual su compañía se desarrolla.
    </Typography>
 
    <Typography sx={{ mb: 3 }}>
      Seleccione de acuerdo a su actividad principal.
    </Typography>
 
    <Box sx={{ ml: 3, mb: 4 }}>
      <Typography>• Industria en general.</Typography>
      <Typography>
        • Empresa de servicios de apoyo para la industria.
      </Typography>
      <Typography>
        • Empresa de servicios en general.
      </Typography>
      <Typography>• Institución educativa.</Typography>
      <Typography>
        • Institución pública de Gobierno.
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 3 }}>
      Compañía: {form.empresa || "Sin especificar"}
    </Typography>
 
    <FormControl sx={{ width: "100%" }}>
      <FormLabel>
        13. Por favor, seleccione su principal
        industria o sector comercial.
      </FormLabel>
 
      <RadioGroup
        name="seccion1Industria"
        value={form.seccion1Industria}
        onChange={handleChange}
      >
        <FormControlLabel
          value="industria"
          control={<Radio />}
          label="Industria en general (Industria aeroespacial, automotriz, metalúrgica, petroquímica, agroindustria, textil, etc.)"
        />
 
        <FormControlLabel
          value="serviciosIndustria"
          control={<Radio />}
          label="Empresa de servicios de apoyo para la industria (Outsourcing, logística, shelters, etc.)"
        />
 
        <FormControlLabel
          value="servicios"
          control={<Radio />}
          label="Empresa de servicios en general (Comercios, salud, instituciones financieras, hotelería, transporte, ventas, etc.)"
        />
 
        <FormControlLabel
          value="educativa"
          control={<Radio />}
          label="Institución educativa (Escuelas, centros de capacitación, etc.)"
        />
 
        <FormControlLabel
          value="gobierno"
          control={<Radio />}
          label="Institución pública de Gobierno (Dependencias de Gobierno)"
        />
 
        <FormControlLabel
          value="otro"
          control={<Radio />}
          label="Otro (especifique)"
        />
      </RadioGroup>
    </FormControl>
 
    {form.seccion1Industria === "otro" && (
      <TextField
        fullWidth
        sx={{ mt: 2 }}
        name="otroIndustria"
        value={form.otroIndustria}
        onChange={handleChange}
        placeholder="Especifique"
      />
    )}
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(3)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(5)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 5 */}
{paso === 5 && (
  <>
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Sector Comercial - Información General
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 4 }}>
      En esta sección, identificamos el producto o proceso principal de su
      compañía, así como el origen de inversión y antigüedad de la compañía.
    </Typography>
 
    <Typography sx={{ mb: 4 }}>
      Compañía: {form.empresa || "Sin especificar"}
    </Typography>
 
    <Typography fontWeight="bold" sx={{ mb: 1 }}>
      14. Por favor, especifique el producto final o servicios que su compañía
      fabrica o comercializa.
    </Typography>
 
    <TextField
      fullWidth
      multiline
      rows={4}
      name="productoServicio"
      value={form.productoServicio}
      onChange={handleChange}
      sx={{ mb: 5 }}
    />
 
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      15. De acuerdo a su selección anterior: Industria en general
    </Typography>
 
    <Typography sx={{ mb: 3 }}>
      Por favor, indique los principales sectores económicos con los que su
      compañía se relaciona.
    </Typography>
 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {[
        "Aeroespacial",
        "Industria en General",
        "Automotriz",
        "Alimenticia - Agroindustria",
        "Electrodomésticos",
        "Farmacéutica",
        "Química",
        "Petroquímica",
        "Tecnología y telecomunicaciones",
        "Textil - Confección",
        "Construcción - cementera",
        "Metalúrgica",
        "Manufactura en general",
        "NO APLICA",
        "Otro",
      ].map((sector) => (
        <FormControlLabel
          key={sector}
          control={
            <Checkbox
              checked={form.sectoresEconomicos.includes(sector)}
              onChange={() =>
                handleCheckbox(
                  "sectoresEconomicos",
                  sector
                )
              }
            />
          }
          label={sector}
        />
      ))}
    </Box>
    
    {form.sectoresEconomicos.includes("Otro") && (
      <TextField
        fullWidth
        sx={{ mt: 2, mb: 4 }}
        name="otroSector"
        value={form.otroSector}
        onChange={handleChange}
        label="Especifique"
      />
    )}
 
    <Typography fontWeight="bold" sx={{ mb: 3 }}>
      16. Por favor, seleccione el principal origen de capital de su compañía:
    </Typography>
 
    <RadioGroup
      name="origenCapital"
      value={form.origenCapital}
      onChange={handleChange}
    >
      <FormControlLabel
        value="Alemania"
        control={<Radio />}
        label="Alemania"
      />
 
      <FormControlLabel
        value="Brasil"
        control={<Radio />}
        label="Brasil"
      />
 
      <FormControlLabel
        value="Canadá"
        control={<Radio />}
        label="Canadá"
      />
 
      <FormControlLabel
        value="China"
        control={<Radio />}
        label="China"
      />
 
      <FormControlLabel
        value="España"
        control={<Radio />}
        label="España"
      />
 
      <FormControlLabel
        value="Estados Unidos de América"
        control={<Radio />}
        label="Estados Unidos de América"
      />
 
      <FormControlLabel
        value="Francia"
        control={<Radio />}
        label="Francia"
      />
 
      <FormControlLabel
        value="Inglaterra"
        control={<Radio />}
        label="Inglaterra"
      />
 
      <FormControlLabel
        value="Italia"
        control={<Radio />}
        label="Italia"
      />
 
      <FormControlLabel
        value="Japón"
        control={<Radio />}
        label="Japón"
      />
 
      <FormControlLabel
        value="México"
        control={<Radio />}
        label="México"
      />
 
      <FormControlLabel
        value="Otro"
        control={<Radio />}
        label="Otro (especifique)"
      />
    </RadioGroup>
 
    {form.origenCapital === "Otro" && (
      <TextField
        fullWidth
        sx={{ mt: 2 }}
        name="otroOrigenCapital"
        value={form.otroOrigenCapital}
        onChange={handleChange}
        label="Especifique"
      />
    )}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(4)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(6)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 6 */}
{paso === 6 && (
  <>
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      17. Por favor, seleccione el tiempo que ha estado operando su compañía:
    </Typography>
 
    <RadioGroup
      name="tiempoOperacion"
      value={form.tiempoOperacion}
      onChange={handleChange}
    >
      <FormControlLabel value="0-6 meses" control={<Radio />} label="0 - 6 meses" />
      <FormControlLabel value="7-12 meses" control={<Radio />} label="7 - 12 meses" />
      <FormControlLabel value="1-3 años" control={<Radio />} label="1 - 3 años" />
      <FormControlLabel value="4-6 años" control={<Radio />} label="4 - 6 años" />
      <FormControlLabel value="7-10 años" control={<Radio />} label="7 - 10 años" />
      <FormControlLabel value="11-15 años" control={<Radio />} label="11 - 15 años" />
      <FormControlLabel value="16-20 años" control={<Radio />} label="16 - 20 años" />
      <FormControlLabel value="20-30 años" control={<Radio />} label="20 - 30 años" />
      <FormControlLabel value="30-40 años" control={<Radio />} label="30 - 40 años" />
      <FormControlLabel value="más de 40 años" control={<Radio />} label="Más de 40 años" />
    </RadioGroup>
 
    <Typography fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
      18. ¿Su compañía cuenta con alguna Confederación Sindical (Sindicato)?
    </Typography>
 
    <RadioGroup
      name="confederacionSindical"
      value={form.confederacionSindical}
      onChange={handleChange}
    >
      <FormControlLabel value="si" control={<Radio />} label="Sí" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
      <FormControlLabel value="nose" control={<Radio />} label="No sé" />
    </RadioGroup>
 
    <Typography fontWeight="bold" sx={{ mt: 5, mb: 1 }}>
      19. Seleccione el o los procesos que realiza su compañía.
    </Typography>
 
    <Typography sx={{ mb: 3 }}>
      En caso de que el modelo no se ajuste a su compañía, favor de seleccionar la casilla más cercana.
    </Typography>
 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {[
        "Componentes, partes y sistemas",
        "Chasis y carrocería",
        "Tren motriz",
        "Partes eléctricas y electrónicas",
        "Exteriores",
        "Partes y productos generales",
        "Interiores",
        "Powertrain",
        "Ruedas y llantas",
        "Procesos de manufactura y fabricación",
        "Metal forming / conformado de metal",
        "Plastic molding / moldeo de plástico",
        "Hule o caucho",
        "Tratamiento de superficies",
        "Tratamiento térmico",
        "NO APLICA",
        "Otros",
      ].map((proceso) => (
        <FormControlLabel
          key={proceso}
          control={
            <Checkbox
              checked={form.procesosEmpresa.includes(proceso)}
              onChange={() =>
                handleCheckbox("procesosEmpresa", proceso)
              }
            />
          }
          label={proceso}
        />
      ))}
    </Box>
 
    {form.procesosEmpresa.includes("Otros") && (
      <TextField
        fullWidth
        sx={{ mt: 2 }}
        name="otroProceso"
        value={form.otroProceso}
        onChange={handleChange}
        label="Especifique"
      />
    )}
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(5)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(7)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 7 */}
{paso === 7 && (
  <>
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      20. Seleccione la principal categoría de su compañía de acuerdo a sus procesos.
    </Typography>
 
    <Typography sx={{ mb: 3 }}>
      En caso de que el modelo no se ajuste a su compañía, por favor seleccione la casilla más cercana.
    </Typography>
 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {[
        "Arnesera",
        "Cartón/fibra/panel de madera",
        "Electrónico / Electrónica",
        "Fundición",
        "Interiores / Textil / Piel",
        "Metalmecánica",
        "Plásticos",
        "Químicos / Solventes y adhesivos",
        "Recubrimientos",
        "Vidrios / laminados",
        "NO APLICA",
        "Otro",
      ].map((categoria) => (
        <FormControlLabel
          key={categoria}
          control={
            <Checkbox
              checked={(form.categoriaCompania || []).includes(categoria)}
              onChange={() =>
                handleCheckbox("categoriaCompania", categoria)
              }
            />
          }
          label={categoria}
        />
      ))}
    </Box>
 
    {(form.categoriaCompania || []).includes("Otro") && (
      <TextField
        fullWidth
        sx={{ mt: 2, mb: 4 }}
        name="otraCategoria"
        value={form.otraCategoria}
        onChange={handleChange}
        label="Especifique"
      />
    )}
 
    <Typography fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
      21. En caso de ser proveedor automotriz, seleccione su Nivel de Proveeduría Automotriz:
    </Typography>
 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {[
        "Tier 1",
        "Tier 2",
        "Tier 3",
        "OEM",
        "NO APLICA",
      ].map((nivel) => (
        <FormControlLabel
          key={nivel}
          control={
            <Checkbox
              checked={(form.nivelProveeduria || []).includes(nivel)}
              onChange={() =>
                handleCheckbox("nivelProveeduria", nivel)
              }
            />
          }
          label={nivel}
        />
      ))}
    </Box>
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(5)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(8)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 8 */}
{paso === 8 && (
  <>
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Sector Comercial - TIERS - NIVELES
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 4 }}>
      En esta sección, identificamos el nivel de proveeduría que tiene su compañía.
    </Typography>
 
    <Typography sx={{ mb: 4 }}>
      Compañía: {form.empresa || "Sin especificar"}
    </Typography>
 
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      22. Seleccione la o las compañías armadoras a las cuales es proveedor directo.
    </Typography>
 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {[
        "Audi",
        "BMW",
        "Changan",
        "Daimler",
        "FAW",
        "FCA",
        "Ford",
        "GM",
        "Hino",
        "Honda",
        "Isuzu",
        "JAC",
        "Kia",
        "MAN",
        "Mazda",
        "Navistar",
        "Nissan",
        "Paccar/Kenworth",
        "Scania",
        "Toyota",
        "Volvo",
        "VW",
        "NO APLICA",
        "Otro",
      ].map((empresa) => (
        <FormControlLabel
          key={empresa}
          control={
            <Checkbox
              checked={(form.armadoras || []).includes(empresa)}
              onChange={() =>
                handleCheckbox("armadoras", empresa)
              }
            />
          }
          label={empresa}
        />
      ))}
    </Box>
 
    {(form.armadoras || []).includes("Otro") && (
      <TextField
        fullWidth
        sx={{ mt: 2 }}
        name="otraArmadora"
        value={form.otraArmadora}
        onChange={handleChange}
        label="Especifique"
      />
    )}
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(7)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(9)}
      >
        Enviar
      </Button>
    </Box>
  </>
)}
{/* PASO 9 */}
{paso === 9 && (
  <>
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Headcount Actual - Información General
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 4 }}>
      Compañía: {form.empresa || "Sin especificar"}
    </Typography>
 
    <Typography sx={{ mb: 3 }}>
      <strong>Personal Operativo</strong>: personal que labora en piso o línea
      de producción.
    </Typography>
 
    <Typography sx={{ mb: 3 }}>
      <strong>Personal Administrativo</strong>: personal de oficina,
      supervisión, administrativos, gerencias y direcciones.
    </Typography>
 
    <Typography sx={{ mb: 4 }}>
      <strong>Otro tipo de personal</strong>: ventas, comisionistas, etc.
    </Typography>
 
    <Typography fontWeight="bold" sx={{ mb: 1 }}>
      23. Número de Empleados Actual de Personal Operativo.
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="empleadosOperativos"
      value={form.empleadosOperativos}
      onChange={handleChange}
      sx={{ mb: 4 }}
    />
 
    <Typography fontWeight="bold" sx={{ mb: 1 }}>
      24. Número de Empleados Personal Administrativo.
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="empleadosAdministrativos"
      value={form.empleadosAdministrativos}
      onChange={handleChange}
      sx={{ mb: 4 }}
    />
 
    <Typography fontWeight="bold" sx={{ mb: 1 }}>
      25. Número de empleados de otro tipo de personal.
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="otrosEmpleados"
      value={form.otrosEmpleados}
      onChange={handleChange}
      sx={{ mb: 4 }}
    />
 
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      26. ¿Qué proporción hay de mujeres y hombres?
    </Typography>
 
    <Typography sx={{ mb: 3 }}>
      Las cantidades deben sumar 100.
    </Typography>
 
    <Typography sx={{ mb: 1 }}>Mujeres</Typography>
 
    <TextField
      fullWidth
      type="number"
      name="porcentajeMujeres"
      value={form.porcentajeMujeres}
      onChange={handleChange}
      sx={{ mb: 3 }}
    />
 
    <Typography sx={{ mb: 1 }}>Hombres</Typography>
 
    <TextField
      fullWidth
      type="number"
      name="porcentajeHombres"
      value={form.porcentajeHombres}
      onChange={handleChange}
      sx={{ mb: 4 }}
    />
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(8)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(10)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 10 */}
{paso === 10 && (
  <>
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      27. En proporción ¿Cómo se encuentra distribuido su personal de acuerdo a su edad?
    </Typography>
 
    <Typography sx={{ mb: 2 }}>
      Las cantidades deben sumar 100.
    </Typography>
 
    <Typography sx={{ mb: 1 }}>
      Más de 50 años de edad - Baby Boomers
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="babyBoomers"
      value={form.babyBoomers}
      onChange={handleChange}
      sx={{ mb: 3 }}
    />
 
    <Typography sx={{ mb: 1 }}>
      De 38 años a 50 años de edad - Generación X
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="generacionX"
      value={form.generacionX}
      onChange={handleChange}
      sx={{ mb: 3 }}
    />
 
    <Typography sx={{ mb: 1 }}>
      De 30 años a 37 años de edad - Generación Millennial
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="millennials1"
      value={form.millennials1}
      onChange={handleChange}
      sx={{ mb: 3 }}
    />
 
    <Typography sx={{ mb: 1 }}>
      De 23 años a 29 años de edad - Generación Millennial
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="millennials2"
      value={form.millennials2}
      onChange={handleChange}
      sx={{ mb: 3 }}
    />
 
    <Typography sx={{ mb: 1 }}>
      Generación Z (menores de 23 años)
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="generacionZ"
      value={form.generacionZ}
      onChange={handleChange}
      sx={{ mb: 3 }}
    />
 
    <Typography sx={{ mb: 1 }}>
      DESCONOCIDO - NO MEDIMOS ESE INDICADOR
    </Typography>
 
    <TextField
      fullWidth
      type="number"
      name="edadDesconocida"
      value={form.edadDesconocida}
      onChange={handleChange}
      sx={{ mb: 4 }}
    />
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(9)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(11)}
      >
        Enviar
      </Button>
    </Box>
  </>
)}
{/* PASO 11 */}
{paso === 11 && (
  <>
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Salarios Niveles Técnicos
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 3 }}>
      Compañía: {form.empresa || "Sin especificar"}
    </Typography>
 
    <Typography sx={{ mb: 4 }}>
      En esta sección, se desglosan los salarios del personal técnico,
      identificando las posiciones que tiene en su compañía.
    </Typography>
 
    <Typography fontWeight="bold" sx={{ mb: 3 }}>
      28. Seleccione las posiciones Técnicas que tiene laborando en su compañía.
    </Typography>
 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {[
        "Operador de máquinas convencionales",
        "Operador Básico CNC",
        "Operador CNC 5 ejes",
        "Ajustador/Setup",
        "Tornero",
        "Matricero",
        "Soldador",
        "Programador",
        "Fogoneros / Hornos",
        "Inspector de calidad para herramentales",
        "Técnico mecánico",
        "Técnico electromecánico",
        "Técnico diseñador de Moldes",
        "Técnico diseñador de Aditamentos",
        "Ingeniero diseñador de Troqueles",
        "Ingeniero diseñador de Moldes",
        "Ingeniero diseñador de Aditamentos",
        "Supervisor de Taller de Herramentales",
        "Gerente de Taller de Herramentales",
        "Gerente de Diseño",
        "No tengo personal técnico",
        "Otro",
      ].map((puesto) => (
        <FormControlLabel
          key={puesto}
          control={
            <Checkbox
              checked={form.puestosTecnicos.includes(puesto)}
              onChange={() =>
                handleCheckbox(
                  "puestosTecnicos",
                  puesto
                )
              }
            />
          }
          label={puesto}
        />
      ))}
    </Box>
 
    {form.puestosTecnicos.includes("Otro") && (
      <TextField
        fullWidth
        sx={{ mt: 2 }}
        name="otroPuestoTecnico"
        value={form.otroPuestoTecnico}
        onChange={handleChange}
        label="Especifique"
      />
    )}
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(10)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(12)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 12 */}
{paso === 12 && (
  <>
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Salarios Técnicos
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 3 }}>
      Compañía: {form.empresa || "Sin especificar"}
    </Typography>
 
    <Typography sx={{ mb: 4 }}>
      Tomando la selección anterior, capture el salario bruto mensual y el
      promedio de empleados que tiene dentro de cada posición.
    </Typography>
 
    {/* PREGUNTA 29 */}
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      29. SALARIO MÍNIMO MENSUAL
    </Typography>
 
    {form.puestosTecnicos.map((puesto) => (
      <Box key={`min-${puesto}`} sx={{ mb: 2 }}>
        <Typography sx={{ mb: 1 }}>{puesto}</Typography>
 
        <TextField
          fullWidth
          type="number"
          value={form.salarioMinimo?.[puesto] || ""}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              salarioMinimo: {
                ...prev.salarioMinimo,
                [puesto]: e.target.value,
              },
            }))
          }
        />
      </Box>
    ))}
 
    {/* PREGUNTA 30 */}
    <Typography fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
      30. SALARIO PROMEDIO MENSUAL
    </Typography>
 
    {form.puestosTecnicos.map((puesto) => (
      <Box key={`prom-${puesto}`} sx={{ mb: 2 }}>
        <Typography sx={{ mb: 1 }}>{puesto}</Typography>
 
        <TextField
          fullWidth
          type="number"
          value={form.salarioPromedio?.[puesto] || ""}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              salarioPromedio: {
                ...prev.salarioPromedio,
                [puesto]: e.target.value,
              },
            }))
          }
        />
      </Box>
    ))}
 
    {/* PREGUNTA 31 */}
    <Typography fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
      31. SALARIO MÁXIMO MENSUAL
    </Typography>
 
    {form.puestosTecnicos.map((puesto) => (
      <Box key={`max-${puesto}`} sx={{ mb: 2 }}>
        <Typography sx={{ mb: 1 }}>{puesto}</Typography>
 
        <TextField
          fullWidth
          type="number"
          value={form.salarioMaximo?.[puesto] || ""}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              salarioMaximo: {
                ...prev.salarioMaximo,
                [puesto]: e.target.value,
              },
            }))
          }
        />
      </Box>
    ))}
 
    {/* PREGUNTA 32 */}
    <Typography fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
      32. ¿Cuántos empleados tiene en promedio dentro de cada posición?
    </Typography>
 
    {form.puestosTecnicos.map((puesto) => (
      <Box key={`emp-${puesto}`} sx={{ mb: 2 }}>
        <Typography sx={{ mb: 1 }}>{puesto}</Typography>
 
        <TextField
          fullWidth
          type="number"
          value={form.promedioEmpleados?.[puesto] || ""}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              promedioEmpleados: {
                ...prev.promedioEmpleados,
                [puesto]: e.target.value,
              },
            }))
          }
        />
      </Box>
    ))}
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(11)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(13)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 13 */}
{paso === 13 && (
  <>
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        FIN SECCIÓN 4
      </Typography>
    </Box>
 
    <Typography variant="h6" sx={{ mb: 5 }}>
      Estamos por finalizar, muchas gracias por el tiempo dedicado.
    </Typography>
 
    <Typography sx={{ mb: 4 }}>
      Compañía: {form.empresa || "Sin especificar"}
    </Typography>
 
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      33. ¿Es la primera ocasión que usted participa en la encuesta?
    </Typography>
 
    <RadioGroup
      name="primeraParticipacion"
      value={form.primeraParticipacion}
      onChange={handleChange}
    >
      <FormControlLabel
        value="si"
        control={<Radio />}
        label="Sí es la primera ocasión que participamos"
      />
 
      <FormControlLabel
        value="no"
        control={<Radio />}
        label="No, ya hemos participado anteriormente"
      />
    </RadioGroup>
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(12)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(14)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 14 */}
{paso === 14 && (
  <>
    <Box
      sx={{
        backgroundColor: "#4db6e7",
        color: "white",
        p: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Contacto - Encuesta de RRHH
      </Typography>
    </Box>
 
    <Typography sx={{ mb: 3 }}>
      Agradecemos el tiempo invertido en este instrumento.
    </Typography>
 
    <Typography sx={{ mb: 4 }}>
      Por favor, capture los datos de la persona que desea que reciba la
      información para la presentación de los resultados finales.
    </Typography>
 
    <Box sx={{ mb: 5 }}>
      <Typography>
        Compañía: {form.empresa || "Sin especificar"}
      </Typography>
 
      <Typography>
        Nombre: {form.nombre || ""}
      </Typography>
 
      <Typography>
        Puesto: {form.puesto || ""}
      </Typography>
 
      <Typography>
        Teléfono: {form.telefono || ""}
      </Typography>
 
      <Typography>
        Correo electrónico: {form.email || ""}
      </Typography>
    </Box>
 
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      34. Capture el nombre comercial de su compañía.
    </Typography>
 
    <TextField
      fullWidth
      name="nombreComercial"
      value={form.nombreComercial}
      onChange={handleChange}
      sx={{ mb: 5 }}
    />
 
    <Typography fontWeight="bold" sx={{ mb: 2 }}>
      35. ¿Participan o forman parte de algún grupo empresarial?
    </Typography>
 
    <Typography sx={{ mb: 3 }}>
      Seleccione el o los grupos donde participa su compañía.
    </Typography>
 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {[
        "DESCONOCIDO",
        "Clúster Automotriz de Coahuila",
        "Clúster de Manufactura Avanzada de la Laguna",
        "Clúster Industrial de Confeccionistas de Ropa",
        "Clúster Automotriz de Jalisco",
        "Clúster Automotriz de Nuevo León",
        "Clúster de Electrodomésticos Nuevo León",
        "Clúster Automotriz Zona Centro",
        "Clúster Automotriz de Querétaro",
        "Clúster Automotriz del Estado de México",
        "Clúster Automotriz en Guanajuato",
        "Clúster Automotriz en San Luis Potosí",
        "ADERIAC (San Luis Potosí)",
        "AMECH (Ciudad de México)",
        "APRHIFAC (Ciudad de México)",
        "ARIOAC (Guadalajara)",
        "ERIAC (Nuevo León)",
        "ARIAAC (Aguascalientes)",
        "GIRAA (Aguascalientes)",
        "HONDA MSARG",
        "INDEX",
        "NINGUNO",
        "Otro",
      ].map((grupo) => (
        <FormControlLabel
          key={grupo}
          control={
            <Checkbox
              checked={form.gruposEmpresariales.includes(grupo)}
              onChange={() =>
                handleCheckbox(
                  "gruposEmpresariales",
                  grupo
                )
              }
            />
          }
          label={grupo}
        />
      ))}
    </Box>
 
    {form.gruposEmpresariales.includes("Otro") && (
      <TextField
        fullWidth
        sx={{ mt: 2 }}
        name="otroGrupoEmpresarial"
        value={form.otroGrupoEmpresarial}
        onChange={handleChange}
        label="Especifique"
      />
    )}
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(13)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={() => setPaso(15)}
      >
        Siguiente
      </Button>
    </Box>
  </>
)}
{/* PASO 15 */}
{paso === 15 && (
  <>
    <Typography fontWeight="bold" sx={{ mb: 3 }}>
      36. ¿Desea agregar los datos de contacto de alguien más que le interesaría recibir esta información?
    </Typography>
 
    <Typography sx={{ mb: 4 }}>
      (Por ejemplo personal responsable de Gerencia, Dirección, Presidencia, etc.)
      <br /><br />
      <strong>
        Recuerde que todos los datos de contacto están protegidos mediante nuestro aviso de confidencialidad.
      </strong>
    </Typography>
 
    <RadioGroup
      name="contactoAdicional"
      value={form.contactoAdicional}
      onChange={handleChange}
    >
      <FormControlLabel
        value="agregar"
        control={<Radio />}
        label="Sí, agregar a alguien más"
      />
 
      <FormControlLabel
        value="modificar"
        control={<Radio />}
        label="Modificar mis datos de contacto"
      />
 
      <FormControlLabel
        value="soloYo"
        control={<Radio />}
        label="No, solo yo deseo recibir la información"
      />
    </RadioGroup>
 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setPaso(14)}
      >
        Anterior
      </Button>
 
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Finalizar
      </Button>
    </Box>
  </>
)}
    </Box> 
  );
}
