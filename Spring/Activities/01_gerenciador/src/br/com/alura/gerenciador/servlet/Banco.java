package br.com.alura.gerenciador.servlet;

import java.util.ArrayList;
import java.util.List;

public class Banco {

	private static List<Empresa> lista  = new ArrayList<>();
	
	static {
		Empresa empresa = new Empresa();
		empresa.setNome("Alura");
		lista.add(empresa);
		
		empresa = new Empresa();
		empresa.setNome("Caelum");
		lista.add(empresa);
	}
	
	public void adiciona(Empresa empresa) {
		// TODO Auto-generated method stub
		lista.add(empresa);
		System.out.println(lista.size());
	}

	public List<Empresa> getEmpresas() {
		return Banco.lista;
	}
	
}
