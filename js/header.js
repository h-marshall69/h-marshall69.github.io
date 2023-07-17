// JavaScript Document

function Validarbuscadortexto(form)
{

  if (form.search_string.value == "")
  { alert("Escriba lo que busca"); form.search_string.focus(); return; }

  if (form.search_string.value.length < 4)
  { alert("Texto muy corto"); form.search_string.focus(); return; }
 
  form.submit();
}