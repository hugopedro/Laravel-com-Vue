@extends('layouts.app')

@section('content')
  <pagina tamanho="12">
    <painel titulo="Lista de Artigos">
      <tabela-lista
      v-bind:titulos="['#','Título', 'Descrição']"
      v-bind:itens="[[1,'PHP OO', 'Curso de PHP OO'],[2,'Vue JS', 'Curso de Vue JS']]"/> <!-- com o v-bind ele irá reconhecer os titulos [] como array-->

    </painel>

  </pagina>
@endsection