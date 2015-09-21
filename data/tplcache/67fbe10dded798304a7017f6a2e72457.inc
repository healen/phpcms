<li>
                        <a  href="[field:arcurl/]" target="_blank">

                            <!-- {dede:field.pubdate function="MyDate('Y-m-d',@me)"/} -->


                            <div class="date">
                                <div class="m"><span>[field:pubdate function="MyDate('m',@me)" /]</span></div>
                                <div class="d"><span>[field:pubdate function="MyDate('d',@me)" /]</span></div>
                            </div>

                            <div class="newbox">
                               <div class="title">
                                   <h2> [field:title function='(strlen("@me")>20?cn_substr("@me",20)."…" : "@me" )'/]</h2>
                                   <span>[field:pubdate function="MyDate('Y年m月d日',@me)" /]</span>
                               </div> 
                               <div class="content">
                                [field:description function='(strlen("@me")>180?cn_substr("@me",180)."…" : "@me" )'/]
                               </div>
                            </div>

                            <div class="jiantou">
                                <span>
                                    
                                </span>
                            </div>
                            
                        </a>
                    </li>