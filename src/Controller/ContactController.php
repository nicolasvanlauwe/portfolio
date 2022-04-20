<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact",name="contact_show")
     */
    public function show()
    {
        return $this->render('contact/home.html.twig');
    }
}
