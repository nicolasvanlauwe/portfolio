<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AboutController extends AbstractController
{
    /**
     * @Route("/about",name="about_show")
     */
    public function show()
    {
        return $this->render('about/home.html.twig');
    }
}
